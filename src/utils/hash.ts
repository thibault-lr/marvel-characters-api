import * as crypto from "crypto";

class HashUtils {
  static generateHash(timeStamp: string, privateKey: string, publicKey: string): string {
    return crypto.createHash('md5').update(timeStamp + privateKey + publicKey).digest("hex");
  }
}

export default HashUtils