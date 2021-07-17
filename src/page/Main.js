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
      totalPages={5}
    />
  );

  return (
    <>
      <Grid margin="2em 25em 0 10em">
        <h1>입양하기</h1>

        <NoticeBox>

        </NoticeBox>

        <CardBox>
          <YoutubeBox>유튜브</YoutubeBox>
          <PhotoBox>공지 사진</PhotoBox>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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
  width: 100vw;
  height: 15vh;
 
  display: flex;
  margin: 2em auto;
  box-sizing: border-box;
  
`;

const YoutubeBox = styled.div`
  width: 64.7vh;
  height: 15em;
  background-color: #c4c4c4;
  box-sizing: border-box;
`;

const PhotoBox = styled.div`
  width: 65vh;
  height: 15em;
  background-color: #e6e8e4;

  box-sizing: border-box;
`;

const CardBox = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  width: 130vh;
  height: auto;
  display: flex;
  box-sizing: border-box;

  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 50px;
  margin: 1vh;
  height: 20vh;
  background-color: #e5cbbc;
  flex: 0 0 25%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const PaginationContainer = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
