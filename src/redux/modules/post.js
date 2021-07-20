import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const GET_POST = "GET_POST";
const DELETE_POST = "DELETE_POST";
const DETAIL_POST = "DETAIL_POST";


//Action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));
const detailPost = createAction(DETAIL_POST, (post)=> ({post}));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
    post_id,
    post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

// 게시글 하나에 기본적으로 들어갈 내용
const initialPost = {
    title: "initial title",
    animalName: "initial animalName",
    animalSpecies: "initial animalSpecies",
    animalBreed: "initial animalBreed",
    animalGender: "initial animalGender",
    animalAge: 5,
    animalStory: "initial animalStory",
    animalPhoto: "initial animalPhoto",
};

// 리듀서가 사용할 initialState
const initialState = {
    list: [],
};

const setPostDB = () => {
    return function (dispatch, getState, { history }) {
        axios
            .get("http://3.36.119.207/api/animals")
            .then((res) => {
                dispatch(setPost(res.data.result));
                // console.log(res.data.result);
            })
            .catch((err) => {
                // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
                console.log("getPost도중 에러 발생");
            });
    };
};

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

const addPostDB = (post) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "POST",
            url: "http://3.36.119.207/api/animals",
            data: post,
        })
            .then((res) => {
                console.log(res);
                dispatch(addPost(post));
                history.replace("/");
            })
            .catch((err) => {
                console.log("post 작성 실패", err);
            });
    };
};


//Reducer

export default handleActions(
    {
        [SET_POST]: (state, action) => {
            return produce(state, (draft) => {
                // draft.list.push(...action.payload.post_list);
                draft.list = action.payload.post_list;
            });
        },
        [ADD_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.unshift(action.payload.post);
            }),
        [GET_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.post = action.payload.post;
            }),
        [DETAIL_POST]: (state, action) =>
            produce(state, (draft) => {
                // console.log(action.payload.post)
                draft.post = action.payload.post;
            }),
        [EDIT_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.post = action.payload.post;
            }),

        [DELETE_POST]: (state, action) => {
            produce(state, (draft) => {});
        },
    },
    initialState
);

//Action creator export
const actionCreators = {
    setPost,
    addPost,
    getPost,
    editPost,
    setPostDB,
    addPostDB,
    detailPostDB,
};

export { actionCreators };
