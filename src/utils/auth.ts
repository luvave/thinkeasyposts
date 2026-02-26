export const isTokenValid = (token: string): boolean => {
  if (!token) return false;

  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = atob(payloadBase64);
    const payload = JSON.parse(decodedPayload);

    if (!payload.exp) return false;

    const currentTime = Math.floor(Date.now() / 1000);

    return payload.exp > currentTime;
  } catch {
    return false;
  }
};
