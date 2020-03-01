import * as Hapi from "@hapi/hapi"
import * as Joi from "@hapi/joi"

import Characters from './characters.controller';

export function charactersRoutes(server: Hapi.Server, routePrefix = "/v1"): void {

  const charController = new Characters();

  // characters route
  server.route({
    method: "GET",
    path: `${routePrefix}/characters`,
    options: {
      handler: charController.getCharacters,
      validate: {
        query: {
          offset: Joi.number()
        }
      }
    }
  })
}