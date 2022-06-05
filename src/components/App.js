import React, { useState } from "react";

import Main from "./Main";
import SignIn from "./SignIn";
import config from "../config.json";

export default () => {
  const [name, setName] = useState("");

  if (config.signInEnabled && name === "") {
    // ↓ニックネームに情報が入ったらsetNameを使用して状態を変更したい
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
