import * as Hapi from "@hapi/hapi"
import * as Vision from "@hapi/vision";

/*
 * Vision plugin
 *
 * @see https://github.com/hapijs/vision/blob/master/API.md#options
 */
export default async (server: Hapi.Server): Promise<void> =>
  await server.register(Vision);