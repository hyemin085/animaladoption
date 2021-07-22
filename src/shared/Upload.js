import React from "react";
import { Button } from "../elements";
import { storage } from "./firebase";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();
  // const is_uploading = useSelector(state => state.image.uploading);
  const fileInput = React.useRef();
  const selectFile = () => {
    let profile = fileInput.current.files[0];
    dispatch(imageActions.uploadProfileFB(profile));
  };

  return (
    <React.Fragment>
      <Button onClick={selectFile} />
      <input type="file" ref={fileInput} onChange={selectFile} />
    </React.Fragment>
  );
};

export default Upload;
