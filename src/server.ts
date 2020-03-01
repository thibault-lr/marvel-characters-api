import * as Hapi from "@hapi/hapi";

import * as Characters from "./api/characters";

class Server {
  
  private server: Hapi.Server;

  constructor(options: Hapi.ServerOptions) {
    this.server = new Hapi.Server(options);
  }

  getServer(): Hapi.Server {
    return this.server;
  }
  
  async startServer(): Promise<void> {
    try {
      await this.server.start();
      console.log(`Server running at ${this.server.info.protocol}://${this.server.info.host}:${this.server.info.port}`)
    } catch (e){
      console.error("Server failed to start", e.stack)
    }
  }

  initControllers(){
    Characters.init(this.server)
  }

}

export default Server