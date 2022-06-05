import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList";

// チャット欄のスタイルの調整
const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

const Main = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      {/* nameを持たせるのはテキストを打ち込んで出力する際にアカウント名も表示する必要があるため */}
      <MessageInputField name={name} />
    </div>
  );
};

export default Main;
