import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWozcAwkKqwaGeVx7mrvCa4dgQWK3zTAg",
  authDomain: "idobatakaigi-project.firebaseapp.com",
  databaseURL: "https://idobatakaigi-project-default-rtdb.firebaseio.com/",
  projectId: "idobatakaigi-project",
  storageBucket: "idobatakaigi-project.appspot.com",
  messagingSenderId: "559894479371",
  appId: "1:559894479371:web:009eae82a87932c695fd0e",
};

firebase.initializeApp(firebaseConfig);
// ↓このデータベースはリアルタイムデータべースをまるっと参照してる
const database = firebase.database();
// ↓特定のリファレンスを作る
const messageRef = database.ref("messages");

// ↓firebase.jsの中では実行しない、エクスポートしてイベントが起こった際に引き出させる
export const pushMessage = ({ name, text }) => {
  // ↓必要なデータは名前とテキストなのでオブジェクトに渡す
  messageRef.push({ name, text });
};
