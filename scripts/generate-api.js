import { execSync } from 'child_process';
import https from 'https';
import fs from 'fs';
import { config } from 'dotenv';

let SWAGGER_URL = config().parsed?.VITE_SWAGGER_URL;

const SCHEMA_PATH = 'scripts/schema.json';

function downloadSchema(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to get schema: ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

function fixSchemaFile(path) {
  try {
    const raw = fs.readFileSync(path, 'utf-8');
    const schema = JSON.parse(raw);
    const auth = schema?.components?.securitySchemes?.Authorization;
    if (auth && 'in' in auth) {
      delete auth.in;
      fs.writeFileSync(path, JSON.stringify(schema, null, 2));
      console.log("Fixed invalid 'in' property in Authorization security scheme.");
    }
  } catch (e) {
    console.warn('Could not fix schema file:', e);
  }
}

(async () => {
  try {
    console.log('Downloading Swagger schema...');
    await downloadSchema(SWAGGER_URL, SCHEMA_PATH);
    console.log('Schema downloaded. Fixing schema if needed...');
    fixSchemaFile(SCHEMA_PATH);
    console.log('Running orval...');
    execSync('npx orval --config orval.config.ts', { stdio: 'inherit' });
    console.log('Formatting generated files with Prettier...');
    execSync('npx prettier --write ./src/generated', { stdio: 'inherit' });
    console.log('API types and react-query hooks generated and formatted successfully!');
  } catch (error) {
    console.error('Failed to generate API types and hooks:', error);
    process.exit(1);
  }
})();
