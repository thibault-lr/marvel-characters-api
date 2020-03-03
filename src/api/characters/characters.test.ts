import Server from "./../../server";

import { APIConnector } from "./../../utils/api"

jest.mock("./../../utils/api");

describe("Characters testing", () => {
  let server: Server
  beforeAll( async done => {
    server = new Server({ host: "localhost", port: 4005 })
    server.initControllers()
    await server.startServer()
    done()
  })

  afterAll(async done => {
    await server.getServer().stop()
    done();
  })



  test("It should return the data", async (done) => {
    jest.mock('./characters.controller.ts');

    const options = {
      method: 'GET',
      url: '/v1/characters?offset=0&limit=10'
    }

    const response = await server.getServer().inject(options);
    expect(response.statusCode).toBe(200);
    done();

  })
})