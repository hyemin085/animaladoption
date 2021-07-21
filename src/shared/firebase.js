import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDdQkH6NvmyxtpTZ-SEyVOOA9ZQBex-Y0k",
    authDomain: "freedom-animal.firebaseapp.com",
    projectId: "freedom-animal",
    storageBucket: "freedom-animal.appspot.com",
    messagingSenderId: "179828275239",
    appId: "1:179828275239:web:4be4e774a82171e77f3602",
    measurementId: "G-3019F6MYQ6"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };