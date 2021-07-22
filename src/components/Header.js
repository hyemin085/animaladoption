import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements";
import logo from "../logo.png";

import { actionCreators as useActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

const Header = (props) => {
    const dispatch = useDispatch();
    const is_session = sessionStorage.getItem("token") ? true : false;
    console.log(is_session);

    if (is_session) {
      return (
          <React.Fragment>
          <Container1>
              <Grid padding="2vh 0.8vw" height="90%">
                  <Grid is_flex padding="4px 60px">
                      <Grid>
                          <Text margin="0px" size="24px" bold>
                              <Menu style={{ border: "1px" }}>
                                  <img
                                      src={logo}
                                      alt="Logo"
                                      style={{
                                          width: "110%",
                                          height: "110%",
                                      }}
                                      onClick={() => {
                                          history.push("/");
                                      }}
                                  />
                              </Menu>
                              {/*<a href="#about">*/}
                              <Menubar style={{marginLeft: "5em"}}>소개</Menubar>
                              <Menubar>활동</Menubar>
                              <Menubar>참여</Menubar>
                              <Menubar>자료</Menubar>
                              <Menubar>후원</Menubar>
                              <Menubar style={{ marginRight: "5em" }}>온센터</Menubar>
                              <Menubar style={{ border: "none", margin: "1em 3em 0 0" }}>
                                  <OnButton
                                      onClick={() => {
                                          history.push("/write");
                                      }} style = {{borderRight:"1px solid #FFFFFF"}}
                                  >
                                      포스팅하기
                                  </OnButton>
                                  <OnButton
                                      onClick={() => {
                                          dispatch(useActions.logOutDB());
                                      }}
                                      style={{ marginTop: "-20px" }}
                                  >
                                      로그아웃
                                  </OnButton>
                              </Menubar>
                          </Text>
                      </Grid>
                  </Grid>
              </Grid>
          </Container1>
        </React.Fragment>
      );
    }
    return (
        <>
            <Container>
                <Grid padding="2vh 0.8vw" height="90%">
                    <Grid is_flex padding="4px 60px">
                        <Grid>
                            <Text margin="0px" size="24px" bold>
                                <Menu style={{ border: "1px" }}>
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        style={{
                                            width: "110%",
                                            height: "110%",
                                        }}
                                        onClick={() => {
                                            history.push("/");
                                        }}
                                    />
                                </Menu>
                                {/*<a href="#about">*/}
                                <Menubar style={{marginLeft: "5em"}}>소개</Menubar>
                                <Menubar>활동</Menubar>
                                <Menubar>참여</Menubar>
                                <Menubar>자료</Menubar>
                                <Menubar>후원</Menubar>
                                <Menubar style={{ marginRight: "5em" }}>온센터</Menubar>
                                <Menubar style={{ border: "none", margin: "1em 3em 0 0" }}>
                                    <OnButton
                                        style={{ borderRight: "1px solid #FFFFFF" }}
                                        onClick={() => {
                                            history.push("/signup");
                                        }}  style = {{borderRight:"1px solid #FFFFFF"}}
                                    >
                                        회원가입
                                    </OnButton>
                                    <OnButton
                                        onClick={() => {
                                            history.push("/login");
                                        }}
                                    >
                                        로그인
                                    </OnButton>
                                </Menubar>
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

const Container1 = styled.div`
  width: 100vw;
  height: 5%;
  border-bottom: 1px solid #67bfb2;
  
`;

const Container = styled.div`
  width: 100vw;
  height: 5%;
  border-bottom: 1px solid #67bfb2;
  //overflow: hidden;
`;

const OnButton = styled.button`
  background-color: #67bfb2;
  color: #ffffff;
  width: 6em;
  height: 2.4em;
  border: none;
  font-size: 15px;
  font-weight: normal;
  cursor: pointer;
  diplay: flex;
  &:hover {
    opacity: 0.8;
  }
`;

const Menubar = styled.li`
  float: left;
  list-style: none;
  padding-left: 0px
  width: 30vh;
  //margin-left: 4em;
  margin : 1em 3em 0 0 ;
  font-size: 0.8em;
  font-weight: bold;
  color: black;
  cursor: pointer;
  &:hover {
    border-bottom: 2.5px solid #67BFB2;
  }
`;
const Menu = styled.li`
  float: left;
  list-style: none;
  padding-left: 0px
  width: 30vh;
  margin-left: 5em;
  font-size: 0.8em;
  font-weight: bold;
  color: black;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #67BFB2;
  }
`;

export default Header;
