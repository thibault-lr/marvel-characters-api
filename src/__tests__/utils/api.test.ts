import { APIConnector } from "./../../utils/api";



describe("Test API Connector", () => {
  const apiObj = new APIConnector("/baseURL", {"param":"ok"})

  it("Should instanciate with the correct parameters", () => {
    expect(apiObj.connector.defaults.baseURL).toBe("/baseURL");
    expect(apiObj.connector.defaults.params).toMatchObject({"param":"ok"});
    expect(apiObj.connector.defaults.responseType).toBe("json");
  })
})