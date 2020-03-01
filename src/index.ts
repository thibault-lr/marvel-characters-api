
import Server from './server';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
( async () => {
  //set up server exceptions
  process.on("uncaughtException", (error: Error) => {
    console.error("uncaughtException", error.stack);
    process.exit(1);
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit(1);
  });

  const server = new Server({ host: process.env.NODE_HOST, port: process.env.NODE_PORT });
  server.initControllers()
  try {
    await server.startServer()
  } catch (e) {
    console.error("Server error : ", e.stack)
  }
    
})()
