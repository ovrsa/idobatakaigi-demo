import firebase from "firebase";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
// ↓このデータベースはリアルタイムデータべースをまるっと参照してる
const database = firebase.database();
// ↓特定のリファレンスを作る
const messagesRef = database.ref("messages");

// ↓firebase.jsの中では実行しない、エクスポートしてイベントが起こった際に引き出させる
export const pushMessage = ({ name, text }) => {
  // ↓必要なデータは名前とテキストなのでオブジェクトに渡す
  messagesRef.push({ name, text });
};
