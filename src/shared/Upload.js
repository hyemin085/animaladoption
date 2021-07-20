//확인하고 지울지 말지 지울지 말지 고민할 것

import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "../elements";

const Upload = (props) => {
  const fileInput = React.useRef();
  const [file, setFile] = React.useState(null);

  // ref 를 쓰는 이유 : 파일을 선택하고 업로드 할때 접근하기 위해서임. 파일선택하자마자가 아니라(not e)
  const selectFile = (e) => {
    setFile(e.target.files[0]);

    // console.log(e.target.files[0]);
    // console.log(fileInput.current.files[0]); // 파일정보임!
  };
  console.log(file);
  let formData = new FormData();

  formData.append("img", file); //file : 업로드할 이미지 정보

  const uploadDB = () => {
    axios({
      method: "post",
      url: "",
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("이미지업로드 실패", err);
      });
  };

  return (
    <React.Fragment>
      <UploadWrap>
        <input type="file" onChange={selectFile} ref={fileInput} />
      </UploadWrap>
      {/* <Button _onClick={uploadDB}>업로드</Button> */}
    </React.Fragment>
  );
};

const UploadWrap = styled.div`
  box-sizing: border-box;
  border: 1px solid #dddddd;
  width: 100%;
  padding: 12px 4px;
  font-size: 1rem;
`;

export default Upload;
