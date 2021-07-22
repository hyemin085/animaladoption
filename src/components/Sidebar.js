import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";
import on from "../on.png";
import sidebar from "../sidebar.png"

const Sidebar = () => {
    return (
        <>
            <Grid padding="0 10vw 0 0">
                <Container>
                    <PhotoBox style ={{height: "9vw"}}>
                        <img src={on} alt="" style={{ width: "65%", height: "55%" }} />
                    </PhotoBox>
                    <MenuBox>온 세상</MenuBox>
                    <MenuBox>온 이야기</MenuBox>
                    <MenuBox>온 구조동물</MenuBox>
                    <MenuBox>결연후원</MenuBox>
                    <MenuBox>입양하기</MenuBox>
                    <MenuBox>입양 후 이야기</MenuBox>
                    <MenuBox>봉사활동</MenuBox>
                    <MenuBox>온 소개</MenuBox>
                    <img src={sidebar} style ={{width: "100%" ,height: "150%"}}/>

                </Container>
            </Grid>
        </>
    );
}

const Container = styled.div`
  width: 100%;
  height: 20%;
  max-width: 220px;
  border-left: 1px solid #EFEEEE;
  border-right: 1px solid #EFEEEE;
`;

const PhotoBox = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBox = styled.div`
  width: 100%;
  height: 3.5em;
  background-color: #F8F7F7;
  display: flex;
  align-items: center;
  padding: 1em;
  font-weight: bold;
  font-size: 1.1em;
  border-top: 1px solid #EFEEEE;
  border-left: 1px solid #EFEEEE;
  border-right: 2px solid #EFEEEE;

  &:hover {
    border-left: 3px solid #67BFB2;
    color: #67BFB2;
    cursor : pointer;
  }
  
`;

export default Sidebar;
