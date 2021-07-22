import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import styled from "styled-components";
import { Button, Grid, Input, Text } from "../elements";

import Header from "../components/Header";
import logo from "../logo.png";
import Upload from "../shared/Upload";

const PostEdit = (props) => {
    const dispatch = useDispatch();
    const title = React.useRef();
    const animalName = React.useRef();
    const animalSpecies = React.useRef();
    const animalBreed = React.useRef();
    const animalGender = React.useRef();
    const animalAge = React.useRef();
    const animalStory = React.useRef();
    // 작성자와 같은 유저인지 확인
    const profile_url = useSelector((state) => state.image.profile_url);

    const editPost = () => {
        const post_id = parseInt(props.match.params.id);
        console.log(post_id);
        let post = {
            title: title.current.value,
            animalName: animalName.current.value,
            animalSpecies: animalSpecies.current.value,
            animalBreed: animalBreed.current.value,
            animalGender: animalGender.current.value,
            animalAge: animalAge.current.value,
            animalStory: animalStory.current.value,
            animalPhoto: profile_url,
        };
        dispatch(postActions.editPostDB(post_id, post));
        console.log(post_id, post);
        props.history.push("/");
    };
    return (
        <React.Fragment>
            <Header />
            <Grid padding="50px">
                <Container>
                    <Title>
                        <h2
                            style={{
                                textAlign: "left",
                                margin: "30px 0px 0px 0px",
                                padding: "30px",
                            }}
                        >
                            입양신청 수정
                        </h2>
                        <p style={{ marginLeft: "34px", fontSize: "1.2em" }}>
                            "모든 생명은 보호받고 존중받을 권리가 있습니다"
                            <br />
                            동물자유연대는 사람과 동물이 생태적,윤리적 조화를 이루며 살아
                            <br />
                            가는 세상을 만들기 위해 다방면에서 활동을 펼쳐가고 있습니다.
                        </p>
                    </Title>
                </Container>
                <AddBox>
                    <Line />
                    <InputBox>
                        <div><img src ={profile_url==="" ? "http://via.placeholder.com/400x300" : profile_url} style={{width: "70%", height: "25vw"}}/></div>
                        <br />
                        <Smallbox>
                            <Upload/>

                            <A placeholder="제목" ref={title} />
                            <A placeholder="강아지이름" ref={animalName} />
                            <A placeholder="종" ref={animalSpecies} />
                            <A placeholder="품종" ref={animalBreed} />
                            <A placeholder="성별" ref={animalGender} />
                            <A placeholder="나이" ref={animalAge} />
                            <Textcomment
                                label="게시글 내용"
                                placeholder="게시글 작성"
                                ref={animalStory}
                            />
                            <Grid padding="20px 0px">
                                <Button text="게시글 작성" _onClick={editPost} />
                            </Grid>
                        </Smallbox>
                    </InputBox>
                </AddBox>
            </Grid>
        </React.Fragment>
    );
};

const Bigbox = styled.div`
  width: 70%;
  height: 25vw;
  background-color: antiquewhite;
  margin: auto;
`;

const Container = styled.div`
  height: 15vw;
  width: 55vw;
  margin: auto;
  background-color: #67bfb2;
  color: white;
`;

const Smallbox = styled.div `
  border: 1px solid;
  //text-align: center;
  display: flex;
  flex-direction: column;
  border: none;
  margin : auto;
`;
const Title = styled.div`
  font-size: 1em;
  color: #ffffff;
  text-align: left;
`;

const AddBox = styled.div`
  width: 55vw;
  height: 200vh;
  border: 1px solid #61dafb;
  margin: auto;
`;

const InputBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const Line = styled.div`
  margin-top: 3vw;
  width: 55vw;
  height: 5px;
  background-color: #67bfb2;
  margin-bottom: 3vw;
`;

const A = styled.input`
  border: 1px solid #212121;
  width: 30vw;
  padding : 12px 4px;
  box-sizing: border-box;
  margin: 0.3vw;
`

const Textcomment = styled.textarea`
  border: 1px solid #212121;
  width: 30vw;
  height: 15vw;
  padding : 12px 4px;
  box-sizing: border-box;
  margin: 0.3vw;
  
`




export default PostEdit;