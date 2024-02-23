import crypto from "crypto";

var EncryptionHelper = function () {
  function decryptText(
    cipher_alg: string,
    key: string,
    text: string,
    encoding: BufferEncoding
  ) {
    var bText = Buffer.from(text, encoding);
    var iv = bText.slice(0, 16);
    var payload = bText.slice(16).toString();
    var decipher = crypto.createDecipheriv(cipher_alg, key, iv);
    return Buffer.concat([
      decipher.update(payload, encoding),
      decipher.final(),
    ]);
  }

  return {
    CIPHERS: {
      AES_128: "aes128", //requires 16 byte key
      AES_128_CBC: "aes-128-cbc", //requires 16 byte key
      AES_192: "aes192", //requires 24 byte key
      AES_256: "aes256", //requires 32 byte key
    },
    decryptText: decryptText,
  };
};

export default EncryptionHelper;
