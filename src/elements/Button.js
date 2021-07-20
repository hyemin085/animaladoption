import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, children, margin, width, padding } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <BasicButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </BasicButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
};

const BasicButton = styled.button`
  width: 20%;
  height: 50px;
  border-radius: 20px;
  background-color: #67bfb2;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
`;

export default Button;
