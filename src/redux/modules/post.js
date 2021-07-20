import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const GET_POST = "GET_POST";
const DELETE_POST = "DELETE_POST";

//Action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
// 수정할때 필요한것이 어떤것을 수정할 것인지(post_id) 와 수정할 내용(post)가 필요하기에 두개써줌

const initialState = {
  list: [],
  post: [],
};
const initialPost = {
  title: "이것은 제목....",
  animalName: "김춘배",
  animalSpecies: "개",
  animalBreed: "도베르만",
  animalGender: "수컷",
  animalAge: 5,
  animalStory: "이 강아지로 말하자면.....",
  animalPhoto: "사진",
};

const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    let post_list = [];
    axios({
      method: "GET",
      url: "http://3.36.119.207/api/animals/:animalId",
      // headers: {
      //     "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
      //     "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
      //     'Access-Control-Allow-Origin' : '*'
      // },
    }).then((docs) => {
      const post_list = docs.data;
      dispatch(setPost(post_list));
    });
  };
};

const addPostDB = (
  title,
  animalName,
  animalSpecies,
  animalBreed,
  animalGender,
  animalAge,
  animalStory,
  animalPhoto
) => {
  return function (dispatch, getState, { history }) {
    let _post = {
      ...initialPost,
      title: title,
      animalName: animalName,
      animalSpecies: animalSpecies,
      animalBreed: animalBreed,
      animalGender: animalGender,
      animalAge: animalAge,
      animalStory: animalStory,
      animalPhoto: animalPhoto,
    };
    axios({
      method: "POST",
      url: "http://3.36.119.207/api/animals",
      data: _post,
    })
      .then((docs) => {
        let post = { ..._post, id: docs.data.length + 1 };
        console.log(docs);
        dispatch(addPost(post));
        history.replace("/");
      })
      .catch((err) => {
        console.log("post 작성 실패", err);
      });
  };
};

const detailPostDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: "http://3.36.119.207/api/animals/:animalId",
    }).then((doc) => {
      console.log(doc);
      if (!doc.data) {
        return;
      }
      const post = doc.data;
      dispatch(getPost(post));
    });
  };
};

//Reducer

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        // getOnePostDB 에서 한개 가져오는데 메인으로 돌아가면 전체다불러온다.
        // 근데 한개짜리랑 중복되는 포스트가 나올수도 있으니, 중복되는값을 빼주는 작업
        // draft.list = draft.list.reduce((acc, cur) => {
        //   if (acc.findIndex((a) => a.id === cur.id) === -1) {
        //     return [...acc, cur];
        //   } else {
        //     acc[acc.findIndex((a) => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // }, []);
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
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
  getPostDB,
  addPostDB,
  detailPostDB,
};

export { actionCreators };
