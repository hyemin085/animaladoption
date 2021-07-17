import React from "react";
import { Grid } from "../elements/index";

import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Pagination } from "semantic-ui-react";

import Header from "../components/Header";
import Card from "../components/Card";

const Main = () => {
  const PaginationExampleCompact = () => (
    <Pagination
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={5}
      totalPages={5}
    />
  );

  return (
    <>
      <Header />
      <Grid margin="2em 30em 0 10em">
        <div
          style={{
            border: "2px solid #699B97",
            width: "29px",
            marginBottom: "-20px",
          }}
        ></div>
        <h1>입양하기</h1>

        <NoticeBox>
          <YoutubeBox>유튜브</YoutubeBox>
          <PhotoBox>공지 사진</PhotoBox>
        </NoticeBox>

        <CardBox>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardBox>

        <PaginationContainer>
          <PaginationExampleCompact />
        </PaginationContainer>
      </Grid>
    </>
  );
};

export default Main;

const NoticeBox = styled.div`
  width: 150vh;
  height: 30vh;
  display: flex;
  margin: 2em auto;
  box-sizing: border-box;
`;

const YoutubeBox = styled.div`
  width: 50%;
  height: 30vh;
  background-color: #67bfb2;
`;

const PhotoBox = styled.div`
  width: 50%;
  height: 30vh;
  background-color: #e6e8e4;
`;

const CardBox = styled.div`
  width: 150vh;
  height: auto;
  border: 1px solid black;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4vh;
`;

// const Card1 = styled.div`
//   height: 30vh;
//   background-color: #e5cbbc;
//   box-sizing: border-box;
// `;

const PaginationContainer = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
