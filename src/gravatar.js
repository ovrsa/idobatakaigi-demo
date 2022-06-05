import crypto from "crypto";

export const gravatarPath = (string) => {
  // ↓受け取った値を小文字にする処理
  const lowerCaseString = string.trim().toLowerCase();
  const md5 = crypto.createHash("md5");
  const digest = md5.update("lowerCaseString", "binary").digest("hex");

  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};
