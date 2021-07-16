import React from "react";
import styled from "styled-components";
import {Button, Grid, Input, Text} from "../elements"
import TextField from "@material-ui/core/TextField";

const PostWrite = () => {

    return(
        <React.Fragment>
            <Grid padding="16px">
                <h1>입양동물 작성🎈</h1>
                <Bigbox>이미지 프리뷰</Bigbox>
                <label for="ex_file"></label>
                <input type="file" id="ex_file"/>
                <Input placeholder="강아지이름"/>
                <Input placeholder="종"/>
                <Input placeholder="성별"/>
                <Input placeholder="나이"/>
                <Input
                    label="게시글 내용"
                    placeholder="게시글 작성"
                    multiLine/>
            </Grid>
                <br/><br/>
                <Button text="등록하기"/>

        </React.Fragment>

    )
}

const Bigbox = styled.div `
width: 50%;
  height: 350px;
  background-color: antiquewhite;
`;

export default PostWrite;