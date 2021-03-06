import React from "react";
import styled from "styled-components";
import {Text, Input, Grid, Button} from "../elements"

import Logo from "../components/Logo";

const Signup = () => {


    return (
        <React.Fragment>
            <Logo/>
            <Main>


                <Grid padding="100px 0px">



                    <Container>
                        <div><h2 style={{textAlign: 'left',
                            margin:'30px 0px 0px 0px',
                            padding: '30px'
                        }}
                        >회원가입</h2><Title>
                            <p style={{margin:'30px'}}>"모든 생명은 보호받고 존중받을 권리가 있습니다"<br/>
                                동물자유연대는 사람과 동물이 생태적,윤리적 조화를 이루며 살아<br/>
                                가는 세상을 만들기 위해 다방면에서 활동을 펼쳐가고 있습니다.</p>
                        </Title></div>

                    </Container>

                   <SignBox>
                       <Line/>
                       <InputBox>
                    <Input
                        label =""
                        placeholder="아이디를 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="비밀번호를 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="비밀번호를 다시 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="이름을 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="닉네임을 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="생일을 입력해주세요"/>
                    <br/>
                           <Grid padding="20px 0px">
                               <Button text="가입하기"/>

                           </Grid>
                       </InputBox>

                   </SignBox>
                    {/*<TextField*/}
                    {/*    id="date"*/}
                    {/*    label="Birthday"*/}
                    {/*    type="date"*/}
                    {/*    defaultValue="2017-05-24"*/}
                    {/*    InputLabelProps={{*/}
                    {/*        shrink: true,*/}
                    {/*    }}*/}
                    {/*/>*/}
                </Grid>

            </Main>




        </React.Fragment>

    )
}

export default Signup;

const Main = styled.div`
    text-align: center;
    `;

const Container = styled.div`
  height: 16vw;
  width: 55vw;
margin: auto;
    background-color: #f36f21;
  color: white;

`;

const Title = styled.div`
font-size: 15px;
  color: #ffffff;
  text-align: left;
`;

const SignBox = styled.div`
width: 55vw;
  height: 100vh;
  border: 1px solid black;
  margin: auto;
`;

const InputBox = styled. div`
    
    `;

const Line = styled.div`
  margin-top: 3vw;
  width: 55vw;
  height: 5px;
  background-color: #f36f21;
`;