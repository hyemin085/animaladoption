import React from "react";
import { Grid } from "../elements/index";

import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Pagination } from "semantic-ui-react";

import Header from "../components/Header";
import Card from "../components/Card";
import notice from "../notice.png";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import logo from "../logo.png";

const Main = (props) => {
    const dispatch = useDispatch();
    const card_list = useSelector((state) => state.post.list);

    React.useEffect(() => {
        dispatch(postActions.setPostDB());
    }, []);

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
                    <YoutubeBox>
                        <iframe
                            width="490"
                            height="270"
                            src="https://www.youtube.com/embed/HFvgUuSuj8g"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </YoutubeBox>
                    <PhotoBox>
                        <img src={notice} alt="notice" />
                    </PhotoBox>
                </NoticeBox>

                <CardBox>
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
  width: 70em;
  height: 30vh;
  margin: 2em 0em 5em 2em;
  box-sizing: border-box;
`;

const YoutubeBox = styled.div`
  width: 35em;
  height: 28vh;
  background-color: #67bfb2;
  float: left;
`;

const PhotoBox = styled.div`
  height: 270px;
  background-color: #67bfb2;
  float: left;
  width: 50%;
`;

const CardBox = styled.div`
  width: 72em;
  height: auto;
  //border: 1px solid black;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1vh;
  margin: 1.2em;
`;

const PaginationContainer = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;