/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class APIConnector {
  public async get(url: string) {
    return {
      "data" : {
        "total": 10,
        "count": 10,
        "offset": 10,
        "limit": 10,
        "results": [
          {
            id: 1, 
            "name":"Batman",
            "thumbnail": {
              "path":"path_img", "extension":"jpg"
            }
          },
          {
            id: 2,
            "name": "Superman",
            "thumbnail": {
              "path": "image_not_available", "extension": "jpg"
            }
          },          
        ] 
      }
    }
  }
}