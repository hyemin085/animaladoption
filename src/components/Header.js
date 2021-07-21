import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements";
import logo from "../logo.png";

import { actionCreators as useActions } from "../redux/modules/user";

import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

const Header = (props) => {
    const dispatch = useDispatch();
    const is_session = sessionStorage.getItem("token") ? true : false;
    console.log(is_session);

    if (is_session) {
        return (
            <React.Fragment>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>
                            <BigMenu>
                                <Menu style={{ marginLeft: "-30px", border: "none" }}>
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        style={{
                                            margin: "-20px",
                                            width: "120%",
                                            height: "120%",
                                        }}
                                        onClick={"/"}
                                    />
                                </Menu>
                                {/*<a href="#about">*/}
                                <Menu>소개</Menu>
                                <Menu>활동</Menu>
                                <Menu>참여</Menu>
                                <Menu>자료</Menu>
                                <Menu>후원</Menu>
                                <Menu>온센터</Menu>
                                <Menu style={{ border: "none" }}>
                                    <OnButton
                                        onClick={() => {
                                            history.push("/write");
                                        }}
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
                                </Menu>
                            </BigMenu>
                        </Text>

                        <Line />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>
                        <BigMenu>
                            <Menu style={{ marginLeft: "-30px", border: "none" }}>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    style={{
                                        margin: "-20px",
                                        width: "110%",
                                        height: "110%",
                                    }}
                                    onClick={() => {
                                        history.push("/");
                                    }}
                                />
                            </Menu>
                            {/*<a href="#about">*/}
                            <Menu>소개</Menu>
                            <Menu>활동</Menu>
                            <Menu>참여</Menu>
                            <Menu>자료</Menu>
                            <Menu>후원</Menu>
                            <Menu style={{ marginRight: "5em" }}>온센터</Menu>
                            <Menu style={{ border: "none", margin: "0 3em 0 0" }}>
                                <OnButton
                                    style={{ borderRight: "1px solid #FFFFFF" }}
                                    onClick={() => {
                                        history.push("/signup");
                                    }}
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
                            </Menu>
                        </BigMenu>
                    </Text>

                    <Line />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Header;

const Line = styled.hr`
  border: none;
  border: 0.01em solid #699b97;
  width: 100em;
  margin: 5em 0em 0em -2em;
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
  &:hover {
    opacity: 0.8;
  }
`;
const BigMenu = styled.ul`
  width: 230vh;
  //border: 1px solid black;
  height: 5vw;
  float: left;
  color: black;
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