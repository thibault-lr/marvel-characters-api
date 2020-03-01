import * as Hapi from "@hapi/hapi"

import {charactersRoutes} from './characters.routes';

export function init(server: Hapi.Server): void {
  charactersRoutes(server,"/v1")
}