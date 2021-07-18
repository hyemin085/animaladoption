import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from 'axios';

//actions
const LOG_IN = "LOG_IN"; //로그인
const LOG_OUT = "LOG_OUT"; //로그아웃
const LOGIN_CHECK = 'LOGIN_CHECK';
const GET_USER = "GET_USER"; //유저정보 가져오기

//actionCreators
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const loginCheck = createAction(LOGIN_CHECK, (session) => ({session}));
const getUser = createAction(GET_USER, (user) => ({user}));

//initialState
const initialState = {
    user_list: [],
    is_login: false,
};

const loginDB = (nickname, password) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "POST",
            url: "http://3.36.119.207/login",
            headers: {
                "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
                "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
                'Access-Control-Allow-Origin' : '*'
            },
            data: {
                "nickname": nickname,
                "password": password,
            }
        }).then((res)=>{
            console.log(res);
            //여기 물어보자
            localStorage.setItem("name", JSON.stringify(`${nickname}`)); //localStorage의 텍스트형이므로 객체 json.stringfy로 변환
            sessionStorage.setItem("token", res.data);
            dispatch(logIn({
                nickname: nickname,
                password: password,
            }));
            history.push("/");
            window.alert("정상적으로 로그인 되었습니다!")
        }).catch(error=>{
            console.log(error);
            window.alert("로그인 실패!");
        });

    };
};

const logOutDB = () =>{
    return function (dispatch, getState, { history }){
        localStorage.removeItem("name");
        sessionStorage.removeItem("token");
        dispatch(logOut());
        history.replace("/");
    }
}

//회원가입api
const signupDB = (nickname, password) => {
    return function (dispatch, getState, { history }){
        axios({
            method: "POST",
            url: "http://3.36.119.207/api/register",
            headers: {
                "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
                "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
                'Access-Control-Allow-Origin' : '*'
            },
            data: {
                nickname: nickname,
                password: password,
                passwordConfirm : password,
                name: "헹구",

            }
        }).then((res)=>{
            console.log(res);
            history.push("/login");
            window.alert("축하합니다! 회원가입 되었습니다!")
        }).catch(error=>{
            console.log(error);
            window.alert("회원가입 실패!");
        });
    }
};

//Reducer
export default handleActions({
    [LOGIN_CHECK]: (state,action) => produce(state,(draft) => {
        draft.is_login = action.payload.session;
    }),
    [LOG_IN]: (state,action) => produce(state,(draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state,action) => produce(state,(draft) => {
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {

    }),

}, initialState);

//action creator export
const actionCreators = {
    loginCheck,
    logIn,
    logOut,
    getUser,
    loginDB,
    logOutDB,
    signupDB,
};

export {actionCreators};