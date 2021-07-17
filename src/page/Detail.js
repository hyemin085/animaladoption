import React from "react";
import { Grid } from "../elements/index";
import styled from "styled-components";

const Detail = () => {
    return (
        <>
        <Grid margin="2em 30em 0 10em">
            <h6>제목제목</h6>
            <작성자></작성자>
            <라인></라인>
            <컨텐츠>
                <사진></사진>
                <이름, 종, 성별, 나이, 이야기>
            </컨텐츠>

            <라인></라인>
            <아이콘 세개></아이콘>
            <라인></라인>
            <이전글, 목록으로>
            <라인></라인>
            <댓글박스>
                <텍스트애리아></텍스트애리아>
                <등록버튼></등록버튼>
            </댓글박스>
            <라인></라인>
            <댓글></댓글>
            <라인></라인>
            <commentBox>
                <닉네임?></닉네임>
            <comment></comment>
        </commentBox>

        </Grid>
</>
);
};

export default Detail;