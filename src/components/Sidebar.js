import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";
import on from "../on.png";

const Sidebar = () => {
  return (
    <>
      <Grid padding="0 10vw 0 0">
        <Container>
          <PhotoBox>
            <img src={on} alt="" style={{ width: "10vw", height: "15vh" }} />
          </PhotoBox>
          <MenuBox>온 세상</MenuBox>
          <MenuBox>온 이야기</MenuBox>
          <MenuBox>온 구조동물</MenuBox>
          <MenuBox>결연후원</MenuBox>
          <MenuBox>입양하기</MenuBox>
          <MenuBox>입양 후 이야기</MenuBox>
          <MenuBox>봉사활동</MenuBox>
          <MenuBox>온 소개</MenuBox>
        </Container>
      </Grid>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30vh;
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
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
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 1em;
  font-weight: bold;
  font-size: 17px;
  border-top: 1px solid #c4c4c4;
`;

export default Sidebar;
