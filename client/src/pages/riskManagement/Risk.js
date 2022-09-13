import React, { useState } from 'react'
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Wrapper = styled.div`
height: ${(props) => (props.isMobile ? "100%" : "")};
display: flex;
flex-direction: column;
background-color: white;
border: 1px solid rgb(230, 230, 230);
padding: ${(props) => (props.isMobile ? "1.1875rem" : "40px 20px")};
overflow: auto;
`;

const TitleWrapper = styled.div`
 display: flex;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const Title = styled.div`
  width: 70%;
  padding-bottom: ${(props) => (props.isMobile ? "10px" : "18px")};
  display: flex;
  justify-content: center;
  font-size: 23px;
  color: #02215e;
`;

const RegisterInputWrapper = styled.div`
justify-content: center;

`;

const InputLabel = styled.label`
  margin-left: 20px;
  font-size: 12px;
  color: #727272;
  margin: 0px;
`;

const Input = styled.input`
  margin-top: 10px;
  font-size: 12px;
  color: #033e93;
  height: 30px;
  border: 1px solid rgb(200, 200, 200);
  padding-left: 10px;
  padding-right: 10px;
`;

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

const BoxWrapper = styled.div`
 flex: 1 0 0%;
 max-width: 1000px;
 width: 100%;
 margin: ${(props) => (props.isMobile ? "0 auto" : "20px auto")};
 position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const InBoxWrapper = styled.div`
padding: 30px;
display:flex;
justify-content: center;
`;

function Risk() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.User);
  const [riskCode, setRiskCode] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [contents, setContents] = useState("");
  const [confidential, setConfidential] = useState("");
  const [integrity, setIntegrity] = useState("");
  const [availability, setAvailability] = useState("");
  const [riskLevel, setRiskLevel] = useState("");

  function onChangeRiskCode(event) {
    setRiskCode(event.target.value);
  }

  function onChangeMainCategory(event) {
    setMainCategory(event.target.value);
  }

  function onChangeSubCategory(event) {
    setSubCategory(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  function onChangeConfidential(event) {
    setConfidential(event.target.value);
  }

  function onChangeIntegrity(event) {
    setIntegrity(event.target.value);
  }

  function onChangeAvailability(event) {
    setAvailability(event.target.value);
  }

  function onChangeRiskLevel(event) {
    setRiskLevel(event.target.value);
  }

  function onsubmit() {
    let body = {
      writer: user.userData._id,


    }
    let content2 = JSON.stringify(body);
    let body2 ={
      writer: user.userData._id,
      action: "위협 분석 등록",
      content: content2
    }
    axios.post(`/api/riskAnalsys/upload`,body)
        .then((response) => {
          if (response.data.success) {
            axios.post(`/api/log/saveLog`,body2)
                    .then((response) => {
                      if (response.data.success) {
                      } else {
                      }
                    });
            alert("위협 분석 등록되었습니다.")
            setTimeout(() => {
              navigate('/page/RiskManagement/analysis')
            }, 1000);
          } else {
            alert("위협 분석 등록 실패");
          }
        });
    console.log(body,"위협 분석 등록")
  }
  return (
    <>
    <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <Title>위협 분석 등록</Title>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>위협코드</InputLabel>
          <Input 
            type={"input"}
            placeholder="코드를 입력해주세요."
            onChange={onChangeRiskCode}
            value={riskCode}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>대분류</InputLabel>
          <Input 
            type={"input"}
            placeholder="대분류를 입력해주세요."
            onChange={onChangeMainCategory}
            value={mainCategory}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>중분류</InputLabel>
          <Input 
            type={"input"}
            placeholder="중분류를 입력해주세요."
            onChange={onChangeSubCategory}
            value={subCategory}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위협내용</InputLabel>
          <Input 
            type={"input"}
            placeholder="위협내용을 입력해주세요."
            onChange={onChangeContents}
            value={contents}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>기밀성</InputLabel>
          <Input 
            type={"input"}
            placeholder="기밀성을 입력해주세요."
            onChange={onChangeConfidential}
            value={confidential}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>무결성</InputLabel>
          <Input 
            type={"input"}
            placeholder="무결성을 입력해주세요."
            onChange={onChangeIntegrity}
            value={integrity}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>가용성</InputLabel>
          <Input 
            type={"input"}
            placeholder="가용성 입력해주세요."
            onChange={onChangeAvailability}
            value={availability}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위험등급</InputLabel>
          <Input 
            type={"input"}
            placeholder="위험등급을 입력해주세요."
            onChange={onChangeRiskLevel}
            value={riskLevel}
            />
          </InputWrapper> 
          </RegisterInputWrapper>
          </Wrapper>
          <InBoxWrapper>
          <Button onClick={onsubmit}>등록하기</Button>
          </InBoxWrapper>
        </BoxWrapper>
    </>
  )
}

export default Risk