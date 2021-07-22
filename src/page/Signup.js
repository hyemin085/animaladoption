import React, { useCallback } from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements";
import { history } from "../redux/configureStore";
import Login from "./Login";
import Header from "../components/Header";

import logo from "../logo.png";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");

  const siteSignup = () => {
    console.log(nickname, name);
    if (nickname === "" || password === "" || name === "" || pwdCheck === "") {
      window.alert("빈칸있음 확인");
      return;
    }
    if (password !== pwdCheck) {
      window.alert("비밀번호 불일치");
      return;
    }
    dispatch(userActions.signupDB(nickname, password, name));
  };

  return (
    <React.Fragment>
      {/*<img src={logo} alt="Logo" style={{margin: "0px"}}/>*/}
      <Header />
      <Grid padding="2em">
        <Container>
          <Title>
            <h2
              style={{
                textAlign: "left",
                margin: "0px 0px 0px 0px",
                padding: "30px",
              }}
            >
              회원가입
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

        <SignBox>
          <Line />
          <InputBox>
            <Input
              label=""
              placeholder="아이디를 입력해주세요"
              type="text"
              value={nickname}
              _onChange={(e) => {
                setNickname(e.target.value);
              }}
            />

            <Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              _onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              placeholder="비밀번호를 다시 입력해주세요"
              type="password"
              value={pwdCheck}
              _onChange={(e) => {
                setPwdCheck(e.target.value);
              }}
            />
            <Input
              placeholder="이름을 입력해주세요"
              type="text"
              value={name}
              _onChange={(e) => {
                setName(e.target.value);
              }}
            />

            {/*<Input*/}
            {/*    label =""*/}
            {/*    placeholder="생일을 입력해주세요"/>*/}
            <br />
            <Grid padding="20px 0px">
              <Button _onClick={siteSignup} text="가입하기"></Button>
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
    </React.Fragment>
  );
};

export default Signup;

const Main = styled.div`
  text-align: center;
`;

const Container = styled.div`
  height: 15vw;
  width: 55.5em;
  margin: auto;
  background-color: #67bfb2;
  color: white;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 1em;
  color: #ffffff;
  text-align: left;
`;

const SignBox = styled.div`
  width: 55vw;
  height: 200vh;
  border: 1px solid white;
  margin: auto;
`;

const InputBox = styled.div`
  text-align: center;
`;

const Line = styled.div`
  margin-top: 3vw;
  width: 55vw;
  height: 5px;
  background-color: #67bfb2;
  margin-bottom: 3vw;
`;
