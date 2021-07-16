import React from "react";
import styled from "styled-components";

import {Grid, Text} from "./index";



const Input = (props) =>{
    const {label, placeholder, _onChange, type, multiLine} = props;
    if(multiLine){
        return(
            <Grid>
                <Text margin ="0px">{label}</Text>
                <TextArea
                    rows={10}
                    placeholder={placeholder}
                    onChange={_onChange}
                ></TextArea>
            </Grid>
        );
    }
    return(
        <React.Fragment>
            <Text margin="0px">{label}</Text>
            <Inputs type={type} placeholder={placeholder} onChange={_onChange}/>
        </React.Fragment>
    )
}

Input.defaultProps = {
    label: "",
    placeholder : "텍스트를 입력하세요",
    type: "text",
    _onChange: () => {},
}



const TextArea = styled.textarea`
    border: 1px solid #212121;
  width: 50%;
  padding: 12px 4px;
  box-sizing: border-box;
    `;

const Inputs = styled.input`
    border: 1px solid #212121;
  width: 50%;
  padding : 12px 4px;
  box-sizing: border-box;


`;

export default Input;