import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DETAIL_POST = "DETAIL_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LIKE_POST = "LIKE_POST";

//Action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const detailPost = createAction(DETAIL_POST, (post, name) => ({ post, name }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const likePost = createAction(LIKE_POST, (post_id) => ({ post_id }));

// 게시글 하나에 기본적으로 들어갈 내용
const initialPost = {
  nickname: "initial nickname",
  title: "initial title",
  like: 10,
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
  post: initialPost,
};

const setPostDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.36.119.207/api/animals")
      .then((res) => {
        dispatch(setPost(res.data.result));
        console.log("setPostDB", res.data.result);
      })
      .catch((err) => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("getPost도중 에러 발생");
      });
  };
};

const detailPostDB = (animalID) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.36.119.207/api/animals/${animalID}`)
      .then((res) => {
        dispatch(detailPost(res.data.result, res.data.name));
        console.log("detailPostDB", res);
      })
      .catch((err) => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("detailPost도중 에러 발생");
      });
  };
};

const addPostDB = (post) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    axios
      .post("http://3.36.119.207/api/animals", post, { headers: headers })
      // 인자로 들어온 post가 데이터로 들어간다
      .then((res) => {
        console.log(res);
        dispatch(addPost(post));
        window.location.reload();
      })
      .catch((err) => {
        console.log("addPost도중 에러 발생", err);
        console.dir(err);
      });
  };
};

const editPostDB = (post_id, post) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    axios
      .put(`http://3.36.119.207/api/animals/${post_id}`, post, {
        headers: headers,
      })
      .then((res) => {
        dispatch(editPost(post_id, post));
        window.location.reload();
      })
      .catch((err) => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("editPost도중 에러 발생");
        console.dir(err);
      });
  };
};

const deletePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    axios
      .delete(`http://3.36.119.207/api/animals/${post_id}`, {
        headers: headers,
      })
      .then((res) => {
        dispatch(deletePost(post_id));
      })
      .catch((err) => {
        console.log("deletePost도중 에러 발생");
        console.dir(err);
      });
  };
};

const likePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    axios
      .post(`http://3.36.119.207/api/animalLike/${post_id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(likePost(res.data));
      })
      .catch((err) => {
        console.log("like update 실패", err);
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
    [DETAIL_POST]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.post)
        draft.post = action.payload.post;
        draft.name = action.payload.name;

        console.log(action.payload);
        console.log(draft.name);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post;
        // ^ 이렇게 쓰면 post 하나는 수정 되는데 list는 안바뀜. 그래서 수정후 메인페이지로 push되었을 때 제목이 이전꺼로 보이는거임

        draft.list = draft.list.splice(0);
        // ^ 새로고침 해야만 새로운 list가 메인페이지에 반영되는것을 고치려고 얘를 써봤지만.. 무소용..
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const { post_id } = action.payload;
        draft.list = draft.list.filter((post) => post.animalId !== post_id);
      }),
    [LIKE_POST]: (state, action) =>
      produce(state, (draft) => {
        // action.payload를 콘솔 찍어보면 post_id: {ok: true, 메세지: 성공} 이렇게 뜬다. payload.post하면 undefined. draft.post가 undefined된다.
        // detail.js에 썼던 state.post.post의 마지막 post로 이 draft.post가 들어가는 거기 때문에, undefined가 뜨는것..
        // draft.post = action.payload.post; <-위 이유때문에 얘는 안됨

        draft.post.like = state.post.like + 1;
        // ^state는 post.js의 state, post는 게시글 하나하나의 데이터..
      }),
  },
  initialState
);

//Action creator export
const actionCreators = {
  setPost,
  addPost,
  editPost,
  editPostDB,
  setPostDB,
  addPostDB,
  detailPostDB,
  deletePost,
  deletePostDB,
  likePost,
  likePostDB,
};

export { actionCreators };
