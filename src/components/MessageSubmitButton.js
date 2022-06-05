import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ name, setText, text }) => {
  return (
    // 空文字時は送信阻止
    // クリックした際にfirebaseに登録を行う
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
