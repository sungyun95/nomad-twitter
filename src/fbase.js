// Firebase V9 업데이트 되면서. 이슈가 생겼습니다. 이에 코드의 큰 변경 없이 버전 9.0 을 사용하기 위해서. Firebase 의 'compat' 호환 버전 사용을 권장합니다.
// 또한 React Router Dom 이 버전 6 으로 업데이트 되었습니다. 따라서 수강하시는 동안 버전 6으로 업그레이드 하지 말고. 버전 5 유지를 권장합니다.
// Firebase 설치시 npm i firebase 을 하지마시고.
// npm i firebase@9.6.1 이와 같이 입력하세요.
// React Router Dom 설치시 npm i react-router-dom 을 하지마시고.
// npm i react-router-dom@5.3.0 이와 같이 입력하세요.
// Firebase 을 import 할 때. 아래와 같이 입력하세요.

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const fbase = firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storeageService = firebase.storage();
