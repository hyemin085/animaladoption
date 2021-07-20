import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';

import instance from "../../shared/config";
import { setCookie, deleteCookie } from "../../shared/Cookie";
//actions
const LOG_IN = "LOG_IN";  // 로그인
const LOG_OUT = "LOG_OUT"; // 로그아웃
const LOGIN_CHECK = "LOGIN_CHECK"
const GET_USER = "GET_USER"; // 유저정보 가져오기

//actionCreators
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const loginCheck = createAction(LOGIN_CHECK, (session) => ({session}));
const getUser = createAction(GET_USER, (user) => ({user}));


//initialState
const initialState = {
    user_list: [],
    user: null,
    is_login: false,
};

// 로그인 API
const loginAPI = (emailAddress, password) => {
    return function (dispatch, getState, { history }) {

        const user_login = { emailAddress, password };
        console.log(user_login);

        instance.post("user/login", user_login)
            .then((result)=>{
                console.log(result);
                const accessToken = result.data; // API 요청하는 콜마다 해더에 accessTocken 담아 보내도록 설정
                instance.defaults.headers.common["Authorization"] = `${accessToken}`;
                setCookie("token", accessToken, 1, "/");
                dispatch(({
                    username: "username"
                }));
                history.push("/");
            })
            .catch(error=>{
                    console.log(error);
                    window.alert("로그인 실패");
                }
            );
    };
};



// 로그아웃 API
const logOutAPI = () => {
    return function (dispatch, getState, {history}){
        deleteCookie("token");
        instance.defaults.headers.common["Authorization"] = null;
        delete instance.defaults.headers.common["Authorization"];
        dispatch(logOut());
        history.replace("/");
    }
};


// 회원가입 API
const signupAPI = (username, password, passwordChecker, emailAddress) => {
    return function (dispatch, getState, {history}){

        // console.log(username)
        // console.log(emailAddress)
        // console.log(password)
        // console.log(passwordChecker)

        const user = { username, password, passwordChecker, emailAddress };
        console.log(user)

        instance.post("user/signup", user)
            .then((result) => {
                    console.log("가입완료")
                    history.push("/login");
                    window.alert("회원가입 완료. 환영합니다!")
                }
            );

        // axios({
        //     method: "POST",
        //     url: "http://13.124.141.66/user/signup",
        //     headers: {
        //         "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
        //         "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
        //         'Access-Control-Allow-Origin' : '*'
        //     },
        //     data: {
        //         "username": username,
        //         "password": password,
        //         "passwordChecker": passwordChecker,
        //         "emailAddress": emailAddress,
        //     }
        // }).then((res)=>{
        //     console.log(res);
        //     history.push("/login");
        //     window.alert("회원가입 완료. 환영합니다!")
        // }).catch(error=>{
        //     console.log(error);
        //     window.alert("회원가입 실패");
        // });

    };
};
const detailPost = createAction(DETAIL_POST, (post)=> ({post}));
const detailPostDB = (animalID) => {
    return function (dispatch, getState, {history}) {
        const headers = {
            authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
        axios
            .get(`http://3.36.119.207/api/animals/${animalID}`,
                {headers: headers})
            .then((res) => {
                dispatch(detailPost(res.data.result));
                console.log(res.data.result);
            })
            .catch((err) => {
                // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
                console.log("getPost도중 에러 발생");
            });
    };
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
    loginAPI,
    logOutAPI,
    signupAPI,
};

export { actionCreators };