import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PolicyManagementLayout from "../../templates/PolicyManagementLayout";
import Auth from "../../hoc/auth";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 400px;
`;

const InputLabel = styled.label`
  margin-left: 20px;
  font-size: 12px;
  color: #727272;
  margin: 0px;
`;

function PolicyManagement() {
  const location = useLocation();
  const focus = location.pathname.split("/PolicyManagement/")[1];
  const [파일경로, set파일경로] = useState("");
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const variables = {
      writer: user.userData._id,
      title: "증적자료",
      description: role,
      filePath: 파일경로,
    };

    axios.post("/api/policy/uploadPolicy", variables).then((response) => {
      if (response.data.success) {
        setTimeout(() => {
          
          return navigate('/page/PolicyManagement/protect')
        }, 2000);
        alert("정보정책 업로드 성공");
      } else {
        alert("정책 업로드 실패");
      }
    });
  };

  const uploadPolicy = (e) => {
        e.preventDefault();   
      	const formData = new FormData();
      	formData.append('file', e.target.file.files[0]);
        console.log(formData,"정보보호정책");
        const config = {
          header: {  "content-type": "multipart/form-data", },
        };
        axios.post("/api/policy/upload", formData, config).then((response) => {
          console.log(response.data);
          if (response.data.success) {
            let variable = {
              filePath: response.data.url,
              fileName: response.data.fileName,
            };
            set파일경로(variable.filePath);
            alert("증적자료 업로드에 성공하였습니다.");
          } else {
            alert("비디오 업로드에 실패하였습니다.");
          }
        });
    };
    const [role, setRole] = useState('');
    function onChangeRole(event) {
        setRole(event.target.value);
    }
  return (
    <>
      <Outlet />
      {focus ? null :
        <PolicyManagementLayout>

          <h1>정책 업로드</h1>
          <InputWrapper>
          <InputLabel> 정책 종류</InputLabel>
          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            label=""
                            onChange={onChangeRole}
                            >
                        <MenuItem value={"정보보호정책"}>정보보호정책</MenuItem>
                        <MenuItem value={"내부관리계획"}>내부관리계획</MenuItem>
                        <MenuItem value={"정보보호지침"}>정보보호지침</MenuItem>
                        <MenuItem value={"메뉴얼"}>메뉴얼</MenuItem>
                        <MenuItem value={"테스트"}>테스트</MenuItem>
                        <MenuItem value={"정책단계"}>정책단계</MenuItem>
                        </Select>
                              </InputWrapper>
                              <InputWrapper>
          <form encType='multipart/form-data' onSubmit={uploadPolicy}>
            <input type='file' name='file' />
            <button type='submit'>업로드</button>
        </form>
        <Button type="primary" size="large" onClick={onSubmit}>
          제출하기
        </Button>
                              </InputWrapper>
        </PolicyManagementLayout>}

    </>
  );
}

export default Auth(PolicyManagement, true);
