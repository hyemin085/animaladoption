import React from "react";
import styled from "styled-components";
import {Button, Grid, Input, Text} from "../elements"




import logo from "../logo.png"

const PostWrite = () => {
    const [title, setTitle] = React.useState
    return(
        <React.Fragment>
            <img src={logo} alt="Logo" style={{margin: "0px"}}/>
            <Grid padding="50px">
                <Container>
                    <Title>
                    <h2 style={{textAlign: 'left',
                        margin:'30px 0px 0px 0px',
                        padding: '30px'
                    }}
                    >입양신청 등록</h2><p style={{marginLeft:'34px', fontSize:'1.2em'}}>"모든 생명은 보호받고 존중받을 권리가 있습니다"<br/>
                    동물자유연대는 사람과 동물이 생태적,윤리적 조화를 이루며 살아<br/>
                    가는 세상을 만들기 위해 다방면에서 활동을 펼쳐가고 있습니다.</p>

                    </Title>

                </Container>
                <AddBox>
                    <Line/>
                    <InputBox>
                <Bigbox>이미지 프리뷰</Bigbox>
                        <br/>
                <label for="ex_file"></label>
                <input type="file" id="ex_file"/>
                        <Input placeholder="제목"/>
                <Input placeholder="강아지이름"/>
                <Input placeholder="종"/>
                <Input placeholder="성별"/>
                <Input placeholder="나이"/>
                <Input
                    label="게시글 내용"
                    placeholder="게시글 작성"
                    multiLine/>
                        <Grid padding="20px 0px">
                            <Button text="가입하기"/>
                        </Grid>
        </InputBox>

                </AddBox>
            </Grid>
        </React.Fragment>



    )
}

const Bigbox = styled.div `
width: 70%;
  height: 25vw;
  background-color: antiquewhite;
  margin: auto;
`;


const Container = styled.div`
  height: 15vw;
  width: 55vw;
margin: auto;
    background-color: #67BFB2;
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

const InputBox = styled. div`
  text-align: center;
  
  
    `;

const Line = styled.div`
  margin-top: 3vw;
  width: 55vw;
  height: 5px;
  background-color: #67BFB2;
  margin-bottom: 3vw;
`;
export default PostWrite;