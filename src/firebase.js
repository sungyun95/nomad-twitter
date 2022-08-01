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
  apiKey: "AIzaSyDiGkKsUNXCdHOI7vyEfiYj9FQbVJUWULA",
  authDomain: "nomad-twitter-2af48.firebaseapp.com",
  projectId: "nomad-twitter-2af48",
  storageBucket: "nomad-twitter-2af48.appspot.com",
  messagingSenderId: "48696924631",
  appId: "1:48696924631:web:f5da2498e743a0c0755392",
  measurementId: "G-XQYXCGHMDC",
};

export default firebase.initializeApp(firebaseConfig);
