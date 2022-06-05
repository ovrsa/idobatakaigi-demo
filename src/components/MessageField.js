import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import { pushMessage } from "../firebase";

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e) => {
        setText(e.target.value);
      }}
      // ↓押したキーが何かを判断
      // Enterを押したタイミングでバリューを設定
      onKeyDown={(e) => {
        // ↓isComposedがtrueであれば処理を行わない
        if (isComposed) return;

        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          // ↓ここでfirebaseへの登録を行う
          pushMessage({ name, text });
          setText("");
          e.preventDefault();
        }
      }}
      // ↓日本語入力の際に変換の決定のEnterで処理を進めない
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;
