import 'dotenv/config';
import type { Config } from 'orval';

const config: Config = {
  api: {
    output: {
      mode: 'tags',
      target: './src/generated/generated.ts',
      schemas: './src/generated/types',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/utils/api.ts',
          name: 'api',
        },
        useNamedParameters: true,
      },
      prettier: true,
      httpClient: 'axios',
    },
    input: {
      target: './scripts/schema.json',
    },
  },
};

export default config;
