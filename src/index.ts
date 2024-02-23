import { b642ab } from "./helpers/b642ab";
import { decryptOrder } from "./helpers/decryptOrder";
import { str2ab } from "./helpers/str2ab";

let bodyData = ``;
const clientId = ``;

while (bodyData.length % 4 !== 0) {
  bodyData += "=";
}

var originalBase64 = bodyData.replace(/-/g, "+").replace(/_/g, "/");
var decodedBase64 = atob(originalBase64);
var iv = str2ab(decodedBase64.substring(0, 16));
var cipherOrder = b642ab(originalBase64);
var keyData = str2ab(clientId.substring(0, 16));

const main = async () => {
  var decrypted = await decryptOrder({ keyData, cipherOrder, iv });
  var decryptedStr = new TextDecoder().decode(decrypted).slice(16);

  const payload = JSON.parse(decryptedStr);

  // now we can call payload properties

  console.log(`cart total: $`, payload.cart.order.subtotal);
};

main();
