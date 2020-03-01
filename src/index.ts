
import Server from './server';
import dotenv from "dotenv"

dotenv.config()

const server = new Server({host: process.env.NODE_HOST, port: process.env.NODE_PORT});
server.initControllers()
server.startServer()