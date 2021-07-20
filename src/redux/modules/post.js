import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../firebase";
import axios from "axios";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// createAction(Action Creators 더 쉽게 만들기)
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// 리듀서가 사용할 initialState
const initialState = {
  list: [
    {
      ok: true,
      result: {
        userId: 5,
        animalId: 3,
        title: "이것은 제목....",
        animalName: "멍멍이",
        animalSpecies: "개",
        animalGender: "수컷",
        animalAge: "3",
        animalStory: "이 강아지로 말하자면.....",
        animalPhoto: "사진",
      },
    },
  ],
};

const post_db = firestore.collection("animals");

// 파이어베이스랑 통신하는 부분
// export const setPostFB = () => {
//   return function (dispatch) {
//     post_db.get().then((docs) => {
//       let post_data = [];
//       docs.forEach((doc) => {
//         if (doc.exists) {
//           post_data = [...post_data, { id: doc.id, ...doc.data() }];
//         }
//       });

//       // 이제 액션 생성 함수한테 우리가 가져온 데이터를 넘겨줘요! 그러면 끝!
//       dispatch(setPost(post_data));
//     });
//   };
// };

const setPostDB = () => {
  return function (dispatch, getState) {
    axios
      .get("http://3.36.119.207/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("setPost하던 도중 에러 발생!");
      });
  };
};

export const addPostFB = (post) => {
  return function (dispatch) {
    // 생성할 데이터를 미리 만들게요!
    let newPost;

    // add()에 데이터를 넘겨줍시다!
    post_db
      .add(post)
      .then((docRef) => {
        // id를 추가한다!
        newPost = { ...post, id: docRef.id };
        console.log(newPost);

        // 성공했을 때는? 액션 디스패치!
        dispatch(addPost(newPost));
      })
      .catch((err) => {
        // 여긴 에러가 났을 때 들어오는 구간입니다!
        console.log(err);
        window.alert("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };
};

// handelActions(reducer 더 쉽게 만들기)
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        // unshift는 배열 맨 앞에 데이터를 넣어줘요!
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

// 묶어주고 export. 더 편하게 import할 수 있당
const actionCreators = {
  setPost,
  addPost,
  setPostDB,
};

export { actionCreators };
