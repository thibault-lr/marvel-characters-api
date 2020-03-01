import * as Hapi from "@hapi/hapi"
import * as Inert from "@hapi/inert"

/**
 * Inert plugin 
 * 
 * @see https://github.com/hapijs/inert#server-options
 */
const inertPlugin = {
  plugin: Inert,
  options: {
    // in case of further server options to this plugin
  }
};

export default async (server: Hapi.Server): Promise <void> =>
  await server.register(inertPlugin);