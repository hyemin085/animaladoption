import React from "react";
import styled from "styled-components";
import {Text, Input, Grid, Button} from "../elements"
import TextField from '@material-ui/core/TextField';

const Signup = () => {


    return (
        <React.Fragment>
            <Main>
                <Grid padding="5px 0px">

                    <h1>회원가입페이지</h1>
                    <Input
                        label =""
                        placeholder="아이디를 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="비밀번호를 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="비밀번호를 다시 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="이름을 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="닉네임을 입력해주세요"/>
                    <Input
                        label =""
                        placeholder="생일을 입력해주세요"/>
                    <br/>
                    {/*<TextField*/}
                    {/*    id="date"*/}
                    {/*    label="Birthday"*/}
                    {/*    type="date"*/}
                    {/*    defaultValue="2017-05-24"*/}
                    {/*    InputLabelProps={{*/}
                    {/*        shrink: true,*/}
                    {/*    }}*/}
                    {/*/>*/}
                </Grid>
                <Grid padding="20px 0px">
                    <Button text="가입하기"/>

                </Grid>
            </Main>




        </React.Fragment>

    )
}

export default Signup;

const Main = styled.div`
    text-align: center;
    `;