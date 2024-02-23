export async function importKey(keyData: BufferSource) {
  const key = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "AES-CBC" },
    true,
    ["decrypt"]
  );
  return key;
}
