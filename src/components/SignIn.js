import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* target="_blank"で新規でタブを開く */}
      <Link
        color="inherit"
        href="https://twitter.com/xu__9000"
        target="_blank"
        rel="noopener"
      >
        私的集団
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  console.log({ string });

  // 条件付けで発火させる
  // 何か変化があった際に第一引数にある処理を実行する
  useEffect(() => {
    // ↓定数disabledは空文字のときにtrueになる設定
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネームを入力"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            // ↓押したキーが何かを判断
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setName(e.target.value);
                e.preventDefault();
              }
            }}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={() => {
              setName(string);
            }}
          >
            始める
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
