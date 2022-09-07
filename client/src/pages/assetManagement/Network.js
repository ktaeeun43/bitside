import axios from 'axios';
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useSelector } from "react-redux";
import AssetManagementLayout from "../../templates/AssetManagementLayout";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";

const Button = styled.div`

  width: 300px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.3rem 0.875rem;
  color: ${COLOR_WHITE};
  font-size: 0.875rem;
  background-color: ${COLOR_ABLE_BUTTON};
  cursor: pointer;
  border-radius: 4px;
  word-break: keep-all;
`;
const AssetNetWork = (props) => {
  const [파일경로, set파일경로] = useState("");
  const user = useSelector((state) => state.User);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  console.log(user,"로그인 유저")
  useEffect(() => {
    axios.get("/api/file/getNetwork").then((response) => {
      if (response.data.success) {
        const filePath = [ ...response.data.file].sort().reverse()
        setImage(filePath[0].filePath)
      } else {
        alert("유저 가져오기 실패!");
      }
    });
  }, []);
  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: {  "content-type": "multipart/form-data", },
    };
    const body = {
      type: "증적자료",
    };
    formData.append("file", files[0]);
    console.log(formData);
    axios.post("/api/file/upload", formData, config).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        let variable = {
          filePath: response.data.url,
          fileName: response.data.fileName,
        };
        set파일경로(variable.filePath);
      } else {
        alert("비디오 업로드에 실패하였습니다.");
      }
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const variables = {
      writer: user.userData._id,
      title: "네트워크 구상도",
      filePath: 파일경로,
    };

    axios.post("/api/file/uploadNetwork", variables).then((response) => {
      if (response.data.success) {
        setTimeout(() => {
          return navigate('/page/AssetManagement')
        }, 2000);
      } else {
        alert("비디오 업로드 실패");
      }
    });
  };
  console.log(image,"이미지경로");
  return (
    <AssetManagementLayout>
      <h1>네트워크 구성도</h1>
       {image ? <img src={`http://localhost:5001/${image}`} /> :
       <>
      <Dropzone accept="image/*" onDrop={onDrop} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div
              style={{
                display: "flex",
                width: "300px",
                height: "240px",
                  border: "1px solid lightgray",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
                >
                <input {...getInputProps()} />
                이미지
              </div>
            )}
          </Dropzone>
          <Button type="primary" size="large" onClick={onSubmit}>
          Submit
        </Button>
            </>
          }
    </AssetManagementLayout>
  );
};
export default AssetNetWork;