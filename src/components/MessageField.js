import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log(text);
  return (
    <TextField
      fullWidth={true}
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
