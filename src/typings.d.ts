export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PUBLIC_KEY: string;
      API_PRIVATE_KEY: string;
      NODE_HOST: string;
      NODE_PORT: string;
    }
  }
}