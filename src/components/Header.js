import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements";
import logo from "../logo.png"

const Header = () => {


    return(
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>
                        <BigMenu>
                       <Menu style={{marginLeft:"-30px", border: "none"}}><img src={logo} alt="Logo" style={{margin: "-20px", width: "120%", height: "120%"}}/></Menu>
                            {/*<a href="#about">*/}
                            <Menu>소개</Menu>
                           <Menu>활동</Menu>
                           <Menu>참여</Menu>
                           <Menu>자료</Menu>
                           <Menu>후원</Menu>
                           <Menu>온센터</Menu>
                            <Menu style={{border:"none"}}> <OnButton style={{marginTop: "-20px"}}>ON&ON</OnButton></Menu>
                        </BigMenu>
                    </Text>
                    
               <Line/>
                </Grid>

            </Grid>
        </React.Fragment>

    )
}

export default Header;


const Line = styled.hr`
    border: none;
  border: 1px solid #699B97;
  width: 100%;
  margin-top: 80px;
`;

const OnButton = styled.button`
  background-color: #67BFB2;
  color: #ffffff;
  width: 17vh;
  height: 3.2vw;
  border: none;
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
  
`;
const BigMenu = styled.ul`
  width: 200vh;
  //border: 1px solid black;
  height: 5vw;
float: left;
  color: black;
`;
const Menu = styled.li`
  float: left;
  list-style:none;padding-left:0px
  width: 30vh;
  margin-left: 15vh;
  font-size: 20px;
  font-weight : bold;
  color: black;
  cursor: pointer;
  &:hover{
    border-bottom: 3px solid #67BFB2 ;
  }
  
`;
