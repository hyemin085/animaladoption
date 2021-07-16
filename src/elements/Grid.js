import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {width, padding, margin, bg, is_flex, children} = props;

    const styles = {
        width: width,
        padding: padding,
        margin : margin,
        bg: bg,
        is_flex: is_flex,
    };
    return(
        <React.Fragment>
            <Grids {...styles}>{children}</Grids>
        </React.Fragment>

    )
};

const Grids = styled.div`
    width: ${(props)=>props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin?  `margin: ${props.margin};`: "")}
  ${(props) =>(props.bg? `background-color: ${props.bg};`: "")}
  ${(props) =>
    props.is_flex? `display: flex; align-items: center; justify-content: space-between;`
        : ""}
`;

export default Grid;