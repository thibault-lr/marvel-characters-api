import * as Hapi from "@hapi/hapi";
import * as Boom from "@hapi/boom"
import APIConnector from "./../../utils/api";
import * as HashUtils from "./../../utils/hash";
import APIConfig from "./../../config/api";
import CharacterModel from './characters.interface'

class Characters {

  async getCharacters(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject | unknown > {

    const ts = new Date().getTime()
    const hash = HashUtils.default.generateHash(ts.toString(), process.env.API_PRIVATE_KEY, process.env.API_PUBLIC_KEY)

    const API = new APIConnector(APIConfig.API_ENDPOINT, {
      "apikey": process.env.API_PUBLIC_KEY,
    });
  
    const res = await API.get(`/v1/public/characters?ts=${ts}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}`);

    if(! res ) return Boom.notFound()

    const responseMessage = {
      total: res.data.total,
      count: res.data.count,
      offset: res.data.offset,
      limit: 20,
      characters: [] as CharacterModel[]
    };

    if(res.data.results.length > 0){


      res.data.results.forEach( (char: any) => {
        responseMessage.characters.push({
          "id": char.id,
          "name": char.name,
          "image": char.thumbnail.path.includes("image_not_available") ? false : char.thumbnail.path + char.thumbnail.extension
        })        
      })
    }



    return h.response(responseMessage)
  }
}

export default Characters;

