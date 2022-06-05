import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  // 一度だけ取得できれば良いので第2引数は空
  useEffect(() => {
    messagesRef
      .orderByKey()
      // ↓制限クエリ
      .limitToLast(3)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;

        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          // ↓しっかりとentryを定数化し、保守性を高める
          const [key, nameAndText] = entry;

          // 取得する情報を一つのオブジェクトに統合
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);

  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
