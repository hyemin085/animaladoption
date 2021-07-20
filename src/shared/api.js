import axios from "axios";

const accessToken = document.cookie.split("=")[1];

export const api = axios.create({
    baseURL: "http://3.36.119.207",
    headers: {
        "content-type" : "application/json;charset=UTF-8",
        accept: "application/json,",
        authorization: `${accessToken}`,
    },
});

export const api_token = axios.create({
    baseURL: "http://3.36.119.207/api/token",
    headers: {
        "content-type" : "application/json;charset=UTF-8",
        accept: "application/json,",
        authorization: `${accessToken}`,
    },
});