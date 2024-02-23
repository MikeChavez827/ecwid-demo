import { importKey } from "./importKey";
import crypto from "crypto";

export async function decryptOrder(input: {
  keyData: BufferSource;
  iv: ArrayBuffer;
  cipherOrder: ArrayBufferLike;
}) {
  const { keyData, iv, cipherOrder } = input;

  var key = await importKey(keyData);
  try {
    return await crypto.subtle.decrypt(
      { name: "AES-CBC", iv: iv },
      key,
      cipherOrder
    );
  } catch (e) {
    console.log(e);
  }
}
