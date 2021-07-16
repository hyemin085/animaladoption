import React from "react";
import styled from "styled-components";

const Main = () => {


    return(
<>
    <BigBox>
입양절차 및<br/>안내사항
    </BigBox>

    <SmallBox></SmallBox>
</>
    )
}

export default Main;


const BigBox = styled.div`
    width: 80%;
  height: 300px;
  background-color: #E26C31;
  color: white;
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
  
    `;

const SmallBox = styled.div`
    width: 20%;
  height: 200px;
  background-color: #E26C31;
  color: white;
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
  margin-top: 100px;
  
    `;