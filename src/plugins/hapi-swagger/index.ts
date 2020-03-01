import * as Hapi from "@hapi/hapi";
import * as HapiSwagger from "hapi-swagger";
/**
 * Define swagger plugin 
 * 
 * @see https://github.com/glennjones/hapi-swagger/blob/master/optionsreference.md
 */
const swaggerPlugin = {
  plugin: HapiSwagger,
  options: {
    info: {
      title: "Swagger doc api",
      description: `Documentation `,
      version: `Version 0.0.1`
    },
    swaggerUI: true,
    documentationPath: "/docs",
  }
};

export default async (server: Hapi.Server): Promise<void> =>
  await server.register(swaggerPlugin);