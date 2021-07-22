import React, {useCallback} from "react";
import styled from "styled-components";
import {Text, Input, Grid, Button} from "../elements"
import {history} from "../redux/configureStore";
import Login from "./Login";
import Header from "../components/Header";
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


import logo from "../logo.png"
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const Signup = () => {
    const dispatch = useDispatch();
    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [pwdCheck, setPwdCheck] = React.useState("");


    const siteSignup = () => {
        console.log(nickname, name)
        if (nickname === "" || password === "" || name === "" || pwdCheck === "") {
            window.alert("빈칸있음 확인");
            return;
        }
        if (password !== pwdCheck) {
            window.alert("비밀번호 불일치");
            return;
        }
        dispatch(userActions.signupDB(nickname,password,name));
    }



    return (
        <React.Fragment>

            {/*<img src={logo} alt="Logo" style={{margin: "0px"}}/>*/}
            <Header/>
            <Grid padding="2em">
                <div style={{width: "60%",  margin: "auto auto auto 10em"}}>
                <Container>
                    <Title>
                        <h2 style={{
                            fontSize : '2em',
                            textAlign: 'left',
                            margin: '0px 0px 0px 0px',
                            padding: '30px'
                        }}
                        >회원가입</h2><p style={{marginLeft: '34px', fontSize: '1.3em', overflow: "hidden"}}>"모든 생명은 보호받고 존중받을 권리가 있습니다"<br/>
                        동물자유연대는 사람과 동물이 생태적,윤리적 조화를 이루며 살아<br/>
                        가는 세상을 만들기 위해 다방면에서 활동을 펼쳐가고 있습니다.</p>

                    </Title>

                </Container>
                    <Line/>

                <SignBox>

                    <InputBox>

                        <Input
                            label=""
                            placeholder="아이디를 입력해주세요"
                            type ="text"
                            value ={nickname}
                            _onChange ={(e) => {
                                setNickname(e.target.value);
                            }}/>

                        <Input
                            placeholder="비밀번호를 입력해주세요"
                            type = "password"
                            value = {password}
                            _onChange ={(e) => {
                                setPassword(e.target.value);
                            }}/>
                        <Input
                            placeholder="비밀번호를 다시 입력해주세요"
                            type = "password"
                            value = {pwdCheck}
                            _onChange ={(e) => {
                                setPwdCheck(e.target.value);
                            }}/>
                        <Input
                            placeholder="이름을 입력해주세요"
                            type="text"
                            value={name}
                            _onChange ={(e) => {
                                setName(e.target.value);
                            }}/>

                        {/*<Input*/}
                        {/*    label =""*/}
                        {/*    placeholder="생일을 입력해주세요"/>*/}
                        <br/>
                        <Grid padding="20px 0px">
                            <Button _onClick={siteSignup} text="가입하기" style={{margin: "auto"}}></Button>

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
                </div>
            </Grid>

        </React.Fragment>

    )
}

export default Signup;

const Main = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: var(--size);
  height: 15em;
  margin: auto;
  background-color: #67BFB2;
  color: white;
  overflow: hidden;

`;

const Title = styled.div`
  font-size: 1rem;
  color: #ffffff;
  text-align: left;
`;

const SignBox = styled.div`
  width: var(--size);
  height: var(--size);
  //border: 1px solid black;
  margin: 3vw auto;
`;

const InputBox = styled.div`
  text-align: center;
  width: 100%;
  
 
`;

const Line = styled.div`
  width: var(--size);
  height: 2px;
  margin: 3vw auto;
  background-color: #67BFB2;
  color: white;
  overflow: hidden;

`;