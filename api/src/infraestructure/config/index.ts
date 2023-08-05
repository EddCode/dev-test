export const config = {
  server: {
    port: 8080,
    host: '0.0.0.0',
    logger: process.env.NODE_ENV !== 'production'
  },
  jwt: {
    token: 'some-secret-token-hashed'
  }
}
