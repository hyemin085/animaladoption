import React, { useCallback } from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const _onNickname = useCallback((e) => setNickname(e.target.value), []);
  const _onPassword = useCallback((e) => setPassword(e.target.value), []);

  const CheckInput = () => {
    if (nickname === "" || password === "") {
      window.alert("아이디 또는 패스워드를 모두 입력해주세요");
      return;
    }
    dispatch(userActions.loginDB(nickname, password));
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
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
              로그인
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
        <LoginBox>
          <Line />
          <InputBox>
            <Input
              placeholder="아이디를 입력해주세요"
              type="text"
              value={nickname}
              _onChange={_onNickname}
            />

            <Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              _onChange={_onPassword}
            />
            {/*<Input*/}
            {/*    label =""*/}
            {/*    placeholder="생일을 입력해주세요"/>*/}
          </InputBox>
          <Grid padding="20px 0px">
            <div style={{ margin: "2em 0vh 0 29em", display: "block" }}>
              <Button _onClick={CheckInput} text="로그인" />
              <Button
                text="회원가입"
                _onClick={() => {
                  history.push("/signup");
                }}
              />
            </div>
          </Grid>
        </LoginBox>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

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

const LoginBox = styled.div`
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
