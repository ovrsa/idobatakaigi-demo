import React, { useState } from "react";

import SignIn from "./SignIn";

export default () => {
  const [name, setName] = useState("");
  console.log({ name });

  // ↓ニックネームに情報が入ったらsetNameを使用して状態を変更したい
  return <SignIn setName={setName} />;
};
