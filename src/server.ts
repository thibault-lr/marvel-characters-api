import * as Hapi from "@hapi/hapi";

class Server {
  
  private server: Hapi.Server;

  constructor(options: Hapi.ServerOptions) {
    this.server = new Hapi.Server(options);
  }
  
  async startServer(): Promise<void> {
    try {
      await this.server.start();
      console.log(`Server running at ${this.server.info.protocol}://${this.server.info.host}:${this.server.info.port}`)
    } catch (e){
      console.error("Server failed to start", e.stack)
    }
  }
}

export default Server