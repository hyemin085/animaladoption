import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from "axios";
import {getCookie, setCookie, deleteCookie} from "../../shared/Cookie"

// const config = {
//     api: 'http://3.36.119.207',
// };
//
// export { config };
//config 만들어서 관리할까 말까 고민즁


//Action
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

//initialState
const initialState = {
    user: null,
    is_login: false,
};

const logOut = createAction(LOG_OUT, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

//middleware actions
//API통신을 통해 서버에 id,pwd 제공 유저 정보와 토큰 받아 저장
const loginDB = (nickname, password) => {
    return function (dispatch, getState, {history}) {
        axios({
            method: "POST",
            url: "http://3.36.119.207/api/login",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json;charset=UTF-8",
            },
            data: {
                nickname: nickname,
                password: password,
            },
        })
            .then((res) => {
                console.log(res);

                dispatch(
                    setUser({
                        nickname: res.data.nickname,
                        name: res.data.name,
                    })
                );
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
                const accessToken = res.data.token;

                setCookie("is_login", `${accessToken}`);
                document.location.href = "/";
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

//회원가입 API
const signUpDB = (nickname, password, name) => {
    return function (dispatch, getState, {history}) {
        const token = getCookie("is_login");
        console.log(token)
        axios({
            method: "post",
            url: "http://3.36.119.207/api/register",
            data: {
                nickname: nickname,
                password: password,
                name: name,
            },
        })
            .then((res) => {
                window.alert(res.data.result);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
const loginCheckDB = () => {
    return function (dispatch, getState, {history}) {
        const token = getCookie("is_login");
        console.log(token);
        axios({
            method: "post",
            url: "http://3.36.119.207/api/token"
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                console.log(res.data);
                dispatch(
                    setUser({
                        nickname: res.data.nickname,
                        name: res.data.name,
                    })
                );
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };
};

const logoutDB = () => {
    return function (dispatch, getState, {history}) {
        dispatch(logOut());
        history.replace("/");
    };
};

export default handleActions(
    {
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("is_login");
                draft.user = null;
                draft.is_login = false;
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

const actionCreators = {
    logOut,
    getUser,
    loginDB,
    signUpDB,
    loginCheckDB,
    logoutDB,
};

export {actionCreators}