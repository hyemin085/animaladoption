//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyDGOKqbBvxfOeUPecMTZq2Xlgohka35z7Y",
  authDomain: "animal-adopt-test.firebaseapp.com",
  projectId: "animal-adopt-test",
  storageBucket: "animal-adopt-test.appspot.com",
  messagingSenderId: "133365187155",
  appId: "1:133365187155:web:f9e3f70bbaf036c5b77ca6",
  measurementId: "G-M2PQT9V3QS",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
