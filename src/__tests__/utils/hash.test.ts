import Hash from "./../../utils/hash";

describe("Test hash utils", () => {
  it("Should return the correct hash", () => {
    const hashGenerated = Hash.generateHash("a","b","c");
    expect(hashGenerated).toBe("900150983cd24fb0d6963f7d28e17f72")
  })
})