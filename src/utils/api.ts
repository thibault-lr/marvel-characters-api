import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class APIConnector {

  public connector: AxiosInstance;

  constructor(baseUrl: string, params: object) {
    this.connector = axios.create({
      baseURL: baseUrl,
      params: params,
      method: 'get',
      responseType: 'json'
    })
  }

  async get (url: string): Promise<AxiosResponse | undefined> {
    try {
      const result: AxiosResponse = await this.connector.get(url);
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

// export APIConnector