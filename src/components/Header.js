import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements";


const Header = () => {


    return(
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>
                        동물자유연대 소개 활동 참여 자료 후원 온센터 <OnButton>ON&ON</OnButton>
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
  border: 5px double orange;
  width: 200vh;
`;

const OnButton = styled.button`
  background-color: #E26C31;
  color: #ffffff;
  width: 10%;
  height: 50px;
  border: none;
  
`

