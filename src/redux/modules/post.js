import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

const setPost = createAction(SET_POST, (post_list)=> ({post_list}))
const addPost = createAction(ADD_POST, (post) => ({post}));
const editPost = createAction(EDIT_POST, (post_id, post)=> ({post_id, post}));

const initialState = {
    list:[],
    is_loading: false,
};
