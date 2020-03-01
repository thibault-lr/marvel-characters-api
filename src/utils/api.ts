import * as Axios from "axios";

class APIConnector {

  public connector: Axios.AxiosInstance;

  constructor(baseUrl: string, params: object) {
    this.connector = Axios.default.create({
      baseURL: baseUrl,
      params: params,
      method: 'get',
      responseType: 'json'
    })
  }

  async get (url: string): Promise<Axios.AxiosResponse | undefined> {
    try {
      const result: Axios.AxiosResponse = await this.connector.get(url);

      return result.data;
    } catch (error) {

      if(error.response) {
        console.error(error.response.data, url)
      } else if (error.request) {
        console.error(error.request, url)
      } else {
        console.error(error.message, url)
      }
    }
  }
}

export default APIConnector