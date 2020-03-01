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
      description: 'Get characters',
      notes: 'Returns a list of characters',
      validate: {
        query: {
          offset: Joi.number()
        }
      },
      response: {
        status: {
          200: Joi.object({
            total: Joi.number(),
            count: Joi.number(),
            offset: Joi.number(),
            limit: Joi.number(),
            characters: Joi.array().items(Joi.object().keys({
              id: Joi.number(),
              name: Joi.string(),
              image: Joi.string()
            }))
          }).label('Result'),
          404: Joi.any()
        }
      },
      tags: ['api'],
      auth: false
    }
  })
}