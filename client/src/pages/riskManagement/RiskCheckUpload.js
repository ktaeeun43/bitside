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

function RiskCheckUpload() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.User);
  const [group, setGroup] = useState("");
  const [assetGrade, setAssetGrade] = useState("");
  const [check, setCheck] = useState("");
  const [itemName, setItemName] = useState("");
  const [vulnerability, setVulnerability] = useState("");
  const [riskCode, setRiskCode] = useState("");
  const [riskContents, setRiskContents] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [riskdegree, setRiskdegree] = useState("");

  function onChangeGroup(event) {
    setGroup(event.target.value);
  }

  function onChangeAssetGrade(event) {
    setAssetGrade(event.target.value);
  }

  function onChangeCheck(event) {
    setCheck(event.target.value);
  }

  function onChangeItemName(event) {
    setItemName(event.target.value);
  }

  function onChangeVulnerability(event) {
    setVulnerability(event.target.value);
  }

  function onChangeRiskCode(event) {
    setRiskCode(event.target.value);
  }

  function onChangeRiskContent(event) {
    setRiskContents(event.target.value);
  }

  function onChangeRiskLevel(event) {
    setRiskLevel(event.target.value);
  }
  function onChangeRiskdegree(event) {
    setRiskdegree(event.target.value);
  }
  function onsubmit() {
    console.log('위험평가등록')
    let body = {
      writer: user.userData._id,
      assetGroup: group,
      checkitem: assetGrade,
      riskname: check,
      //취약성등급
      weakpoint: vulnerability,
      riskcode: riskCode,
      riskcontent: riskContents,
      //위험등급
      risklevel: riskLevel,
      //위험도
      riskdegree:riskdegree
    }
    let content2 = JSON.stringify(body);
    let body2 ={
      writer: user.userData._id,
      action: "위험 평가 등록",
      content: content2
    }
    axios.post(`/api/riskEstimation/upload`,body)
        .then((response) => {
          if (response.data.success) {
            axios.post(`/api/log/saveLog`,body2)
                    .then((response) => {
                      if (response.data.success) {
                      } else {
                      }
                    });
            alert("위험 평가 등록되었습니다.")
            setTimeout(() => {
              navigate('/page/RiskManagement/results')
            }, 1000);
          } else {
            alert("위험 평가 등록 실패");
          }
        });
    console.log(body,"위험 평가 등록")
  }

  return (
    <>
    <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <Title>위험 평가 등록</Title>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>자산그룹</InputLabel>
          <Input 
            type={"input"}
            placeholder="자산그룹을 입력해주세요."
            onChange={onChangeGroup}
            value={group}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>자산등급</InputLabel>
          <Input 
            type={"input"}
            placeholder="자산등급을 입력해주세요."
            onChange={onChangeAssetGrade}
            value={assetGrade}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>점검항목</InputLabel>
          <Input 
            type={"input"}
            placeholder="점검항목을 입력해주세요."
            onChange={onChangeCheck}
            value={check}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>항목명</InputLabel>
          <Input 
            type={"input"}
            placeholder="항목명을 입력해주세요."
            onChange={onChangeItemName}
            value={itemName}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>취약성등급</InputLabel>
          <Input 
            type={"input"}
            placeholder="취약성등급을 입력해주세요."
            onChange={onChangeVulnerability}
            value={vulnerability}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위협코드</InputLabel>
          <Input 
            type={"input"}
            placeholder="위협코드를 입력해주세요."
            onChange={onChangeRiskCode}
            value={riskCode}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위협내용</InputLabel>
          <Input 
            type={"input"}
            placeholder="위협내용을 입력해주세요."
            onChange={onChangeRiskContent}
            value={riskContents}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위협등급</InputLabel>
          <Input 
            type={"input"}
            placeholder="위협등급을 입력해주세요."
            onChange={onChangeRiskLevel}
            value={riskLevel}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위험도</InputLabel>
          <Input 
            type={"input"}
            placeholder="위험도를 입력해주세요."
            onChange={onChangeRiskdegree}
            value={riskdegree}
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

export default RiskCheckUpload