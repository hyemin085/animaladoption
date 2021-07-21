import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import styled from "styled-components";

import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";

const Card = (props) => {
    const dispatch = useDispatch();

    const card_list = useSelector((state) => state.post.list);

    return (
        <React.Fragment>
            {card_list.map((card, idx) => {
                return (
                    <Box
                        key={card.animalId}
                        onClick={() => {
                            history.push(`/detail/${card.animalId}`);
                        }}
                    >
                        <div>
                            <Img src={card.animalPhoto} style={{ marginLeft: "0.8em" }} />
                        </div>
                        <div style={{ margin: "0.5em 0 0.7em 0.8em", width: "90%" }}>
                            {card.title}
                        </div>
                        <div style={{ marginLeft: "1em" }}>
                            <VisibilityIcon style={{ width: "5%", height: "5%" }} /> 10 |
                            <ThumbUpAltOutlinedIcon
                                style={{ width: "6%", height: "6%", marginTop: "0.3em" }}
                            ></ThumbUpAltOutlinedIcon>{" "}
                            {card.like}
                        </div>
                    </Box>
                );
            })}
        </React.Fragment>
    );
};

// Post.defaultProps = {
//   id: null,
//   title: "20m 절벽에서 구조된 새끼 강아지 4마리",
//   animalName: "김춘배",
//   animalSpecies: "개",
//   animalBreed: "도베르만",
//   animalGender: "수컷",
//   animalAge: 5,
//   animalStory: "이 강아지로 말하자면.....",
//   src: "https://mblogthumb-phinf.pstatic.net/20130303_124/ovcharka_no1_1362279507296igEt3_JPEG/1.jpg?type=w2",
// };

// src="https://mblogthumb-phinf.pstatic.net/20130303_124/ovcharka_no1_1362279507296igEt3_JPEG/1.jpg?type=w2"
// http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg
//https://cdn.cashfeed.co.kr/attachments/d3b183b7d6.jpg 비글

const Box = styled.div`
  margin-bottom: 1em;
`;

const Img = styled.img`
  width: 90%;
  height: 10.8em;
`;

export default Card;