import React, { useEffect, useState } from "react";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MessageItem from "./MessageItem";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: "100%",
    overflow: "auto",
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
      .limitToLast(15)
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

  const length = messages.length;

  return (
    // ↓Messageを画面に描画させる
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index.length + 1;

        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
