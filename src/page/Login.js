import React from "react";
import styled from "styled-components";
import {Text, Input, Grid, Button} from "../elements"
import Header from "../components/Header";

const Login = () => {


    return (
       <React.Fragment>
       <Header/>
           <Main>
           <Grid padding="5px 0px">

               <h1>로그인페이지</h1>
               <Input
                   label =""
                   placeholder="아이디를 입력해주세요"/>
               <Input
                   label =" "
                   placeholder="비밀번호를 입력해주세요"/>
           </Grid>
           <Grid padding="20px 0px">
               <Button
                   />

           </Grid>
           </Main>




       </React.Fragment>

    )
}

export default Login;

const Main = styled.div`
    text-align: center;
    `;