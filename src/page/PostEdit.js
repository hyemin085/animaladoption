import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import styled from "styled-components";
import { Button, Grid, Input, Text } from "../elements";

import logo from "../logo.png";

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
            animalPhoto:
                "https://elaineimages.s3.ap-northeast-2.amazonaws.com/Alexander_Averin_07.jpg",
        };
        dispatch(postActions.editPostDB(post_id, post));
        console.log(post_id, post);
        props.history.push("/");
    };
    return (
        <React.Fragment>
            <img src={logo} alt="Logo" style={{ margin: "0px" }} />
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
                        <Bigbox>이미지 프리뷰</Bigbox>
                        <br />
                        <label htmlFor="ex_file"></label>
                        <input type="file" id="ex_file" />
                        <input placeholder="제목" ref={title} />
                        <input placeholder="강아지이름" ref={animalName} />
                        <input placeholder="종" ref={animalSpecies} />
                        <input placeholder="품종" ref={animalBreed} />
                        <input placeholder="성별" ref={animalGender} />
                        <input placeholder="나이" ref={animalAge} />
                        <textarea
                            label="게시글 내용"
                            placeholder="게시글 작성"
                            ref={animalStory}
                        />
                        <Grid padding="20px 0px">
                            <Button text="게시글 수정" _onClick={editPost} />
                        </Grid>
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
`;

const Line = styled.div`
  margin-top: 3vw;
  width: 55vw;
  height: 5px;
  background-color: #67bfb2;
  margin-bottom: 3vw;
`;

export default PostEdit;