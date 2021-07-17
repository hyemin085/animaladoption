import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from "axios";
import jwt_decode from "jwt-decode";


const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
// const GET_TOKEN = "GET_TOKEN";

const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));
// const getToken = createAction(GET_TOKEN, (user_token) => ({ user_token }));

//nickname

// if(sessionStorage.getItem("MY_SESSION")===null) {
//     sessionStorage.setItem("MY_SESSION", "주소값");
//     window.location.href ="/"
// }

// const decoded = jwt_decode(``)
// const name = decoded.name
// const user_id = decoded.userId

const initialState = {
   user: null,
    is_login: false,
};
