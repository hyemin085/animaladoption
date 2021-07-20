import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from 'axios';

import "moment";
import moment from "moment";

//actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

//action creator
const setComment = createAction(SET_COMMENT, (comment_list, post_id) => ({comment_list, post_id}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({post_id, comment}));
const deleteComment = createAction(DELETE_COMMENT, (id, post_id) => ({id, post_id}));

//initialState
const initialState = {
    list: {},
}

const addCommentDB = (comment, post_id) => {
    return function (dispatch, getState, {history}) {
        console.log(comment)
        let _comment = {
            commentId: post_id,
            animalId: "나중에 추가할 것",
            userId: comment.name,
            description: comment.comment,
            date: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        console.log(_comment)
        axios.post("http://3.36.119.207/api/comment/", {
            ..._comment
        })
            .then((res) => {
                console.log(res.data)
                let comment_list = {...comment, id: res.data.id}
                dispatch(addComment(comment_list, post_id))
            }).catch((err) => {
            console.log(err.response)
            window.alert("댓글에러!")
        })
    }
}

//화면 새로고침 했을때 리덕스 STORE에 있는 정보 다 날라가서 다시 리덕스 STORE에 저장

const getCommentRX = (post_id = null) => {
    return function (dispatch) {
        if (!post_id) {
            return;
        }
        console.log(post_id)
        axios
            .get("http://3.36.119.207/api/comment/:animalId")
            .then((response) => {
                console.log(response)
// axios.get(`http://15.164.217.16/api/comments/${post_id}`)
                let comment_list = []
                response.data.forEach((_post) => {
                    let comment = {
                        description: _post.comment,
                        name: _post.userId,
                        date: _post.date,
                        id: _post.id
                    }
                    comment_list.unshift(comment)
                })
                console.log(comment_list)
                dispatch(setComment(comment_list, post_id))
            }).catch((error) => {
            window.alert("댓글 불러오기 오류")
        })
    }
}

const deleteCommentDB = (id, post_id) => {
    return function (dispatch, getState){
        axios.delete("http://3.36.119.207/api/comment/${id}")
            .then((res) => {
                dispatch(deleteComment(id, post_id));
            }).catch((error) => {
                window.alert("게시물 삭제 오류")
        })
    }
}

export default handleActions(
    {
        [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
            //  draft.list[action.payload.post_id] 안에 아무것도 없는 상태이면 배열도 없는 상태여서
            // unshift도 되지 않습니다. 그래서 아무것도 없는 경우일 때를 따로 설정했습니다.
            if(!draft.list[action.payload.post_id]){
                draft.list[action.payload.post_id] = [action.payload.comment]
                return
            }
            draft.list[action.payload.post_id].unshift(action.payload.comment)
        }),
        [SET_COMMENT]: (state, action) => produce(state, (draft) => {
            draft.list[action.payload.post_id] = action.payload.comment_list
        }),
        [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {
            let idx = draft.list[action.payload.post_id].findIndex((p) => p.id === action.payload.id);
            if(idx !== -1){
                draft.list[action.payload.post_id].splice(idx, 1);
            }
        }),
    },
    initialState
)

const actionCreators = {
    addCommentDB,
    getCommentRX,
    deleteCommentDB
}

export{actionCreators}