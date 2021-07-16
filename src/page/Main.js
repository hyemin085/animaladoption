import React from "react";
import { Grid } from "../elements/index";

import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Pagination } from "semantic-ui-react";

const Main = () => {
  const PaginationExampleCompact = () => (
    <Pagination
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={5}
      totalPages={10}
    />
  );

  return (
    <>
      <Grid margin="2em 25em 0 10em">
        <h1>입양하기</h1>

        <NoticeBox>
          <YoutubeBox>유튜브</YoutubeBox>
          <PhotoBox>공지 사진</PhotoBox>
        </NoticeBox>

        <CardBox>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
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
  width: 100%;
  height: 15em;
  background-color: #cecbce;
  display: flex;
  margin: 2em auto;
`;

const YoutubeBox = styled.div`
  width: 50%;
  height: 15em;
  background-color: #c4c4c4;
`;

const PhotoBox = styled.div`
  width: 50%;
  height: 15em;
  background-color: #e6e8e4;
`;

const CardBox = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  margin: auto;
  margin-top: 4em;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 10%;
  height: 14em;
  background-color: #e5cbbc;
  flex: 0 0 25%;
  margin: 0 1em;
  border: 1px solid red;
`;

const PaginationContainer = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
