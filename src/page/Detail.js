import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid } from "../elements/index";
import Header from "../components/Header";

import styled from "styled-components";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Detail = ({history}) => {
    const dispatch = useDispatch();
    const post_id = history.location.pathname.split('/detail/')[1]
    useEffect(() => {
        dispatch(postActions.detailPostDB(post_id));
    },[])
    const post = useSelector((state) => state.post.post)
    // console.log(post)



    if(!post){
        return(<></>)
    }

    return (
        <>
            <Header />
            <Grid margin="5vh 25vw 0 10vw">
                <div
                    style={{
                        borderTop: "3px solid #699B97",
                        width: "29px",
                        marginBottom: "15px",
                    }}
                ></div>
                <TitleBox>
                    <Title>입양하기</Title>
                    <ApplyButton>♥ 입양 · 임시보호 신청</ApplyButton>
                </TitleBox>

                <h3>{post.title}</h3>
                <Line />
                <ContentBox>
                    <PhotoBox style={{backgroundImage: `url(${post.animalPhoto})`}}/>
                    <DescBox>
                        <p>이름: {post.animalName}</p>
                        <p>종: {post.animalSpecies}</p>
                        <p>종류: {post.animalBreed}</p>
                        <p>성별: {post.animalGender}</p>
                        <p>나이: {post.animalAge}</p>
                    </DescBox>
                    <StoryBox>{post.animalStory}</StoryBox>
                    <ButtonBox>
                        <ApplyButton>♥ 입양 · 임시보호 신청</ApplyButton>
                    </ButtonBox>
                </ContentBox>

                <Line />
                <IconBox>
                    <IconEachBox>
                        <ThumbUpOutlinedIcon />
                    </IconEachBox>
                    <IconEachBox>
                        <FacebookIcon color="primary" />
                    </IconEachBox>
                    <IconEachBox>
                        <TwitterIcon color="primary" />
                    </IconEachBox>
                </IconBox>

                <Line />
                <TitleBox>
                    <MoveEachBox>&lt; 이전글</MoveEachBox>
                    <MoveEachBox
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        목록으로
                    </MoveEachBox>
                    <MoveEachBox>다음글 &gt;</MoveEachBox>
                </TitleBox>

                <Line />

                <div>댓글 달기</div>
                <textarea
                    placeholder="내용"
                    style={{
                        width: "100%",
                        height: "7em",
                        margin: "1em 0",
                        padding: "1em",
                        border: "1px solid #c4c4c4",
                    }}
                />
                <div style={{ width: "100%", height: "4vh" }}>
                    <button
                        style={{
                            width: "3.5em",
                            height: "2em",
                            backgroundColor: "#66BEB2",
                            color: "white",
                            borderStyle: "none",
                            float: "right",
                            cursor: "pointer",
                        }}
                    >
                        등록
                    </button>
                </div>

                <Line />
                <div>댓글</div>

                <Line />
                <CommentBox>
                    <div style={{ fontWeight: "bold" }}>작성자</div>
                    <button
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        삭제
                    </button>
                </CommentBox>

                <div>
                    파양되어 돌아온 아이는 더 마음이 아플 수 밖에 없네요.. 좋은 가족을
                    만나 행복했으면 좋겠어요
                </div>
                <Line />
                <Line />
            </Grid>
        </>
    );
};

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 4vh 0 7vh 0;
  display: inline-block;
`;

const ApplyButton = styled.button`
  height: 6vh;
  padding: 0 1.5vw;
  background-color: #66beb2;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  border-top: solid 1px #ececed;
  margin: 4vh 0;
`;

const ContentBox = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const PhotoBox = styled.div`
  width: 40vw;
  height: 50vh;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const DescBox = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 4vh;
`;

const StoryBox = styled.div`
  width: 80%;
  margin: 2vh auto;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 4vh auto;
`;

const IconBox = styled.div`
  width: 100%;
  height: 6vh;
  display: grid;
  grid-template-columns: 56vw 5vw 4vw;
`;

const IconEachBox = styled.div`
  width: 3em;
  height: 3em;
  border: 1px solid #5d5d5d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MoveEachBox = styled.div`
  width: 6em;
  height: 2.5em;
  border: 1px solid #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CommentBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export default Detail;