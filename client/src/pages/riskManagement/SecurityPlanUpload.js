import React, { useState } from 'react'
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";


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
justify-content: center;
`;

function SecurityPlanUpload() {

  const [control, setControl] = useState("");
  const [protection , setProtection ] = useState("");
  const [urgency, setUrgency] = useState("");
  const [cost, setCost] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [priority, setPriority] = useState("");
  const [riskContents, setRiskContents] = useState("");
  const [riskLevel, setRiskLevel] = useState("");

  function onChangeControl(event) {
    setControl(event.target.value);
  }

  function onChangeProtection(event) {
    setProtection(event.target.value);
  }

  function onChangeUrgency(event) {
    setUrgency(event.target.value);
  }

  function onChangeCost(event) {
    setCost(event.target.value);
  }

  function onChangeDifficulty(event) {
    setDifficulty(event.target.value);
  }

  function onChangePriority(event) {
    setPriority(event.target.value);
  }

  function onChangeRiskContent(event) {
    setRiskContents(event.target.value);
  }

  function onChangeRiskLevel(event) {
    setRiskLevel(event.target.value);
  }


  return (
    <>
    <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <Title>정보 보호 계획 등록</Title>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>통제영역</InputLabel>
          <Input 
            type={"input"}
            placeholder="통제영역을 입력해주세요."
            onChange={onChangeControl}
            value={control}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위험내용</InputLabel>
          <Input 
            type={"input"}
            placeholder="위험내용을 입력해주세요."
            onChange={onChangeRiskContent}
            value={riskContents}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>위험도</InputLabel>
          <Input 
            type={"input"}
            placeholder="위험도를 입력해주세요."
            onChange={onChangeRiskLevel}
            value={riskLevel}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>보호대책</InputLabel>
          <Input 
            type={"input"}
            placeholder="보호대책을 입력해주세요."
            onChange={onChangeProtection}
            value={protection}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>시급성</InputLabel>
          <Input 
            type={"input"}
            placeholder="시급성을 입력해주세요."
            onChange={onChangeUrgency}
            value={urgency}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>구현비용</InputLabel>
          <Input 
            type={"input"}
            placeholder="구현비용을 입력해주세요."
            onChange={onChangeCost}
            value={cost}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>구현난이도</InputLabel>
          <Input 
            type={"input"}
            placeholder="구현난이도를 입력해주세요."
            onChange={onChangeDifficulty}
            value={difficulty}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>우선순위</InputLabel>
          <Input 
            type={"input"}
            placeholder="우선순위를 입력해주세요."
            onChange={onChangePriority}
            value={priority}
            />
          </InputWrapper>
          </RegisterInputWrapper>
          </Wrapper>
          <InBoxWrapper>
          <Button>등록하기</Button>
          </InBoxWrapper>
        </BoxWrapper>
    </>
  )
}

export default SecurityPlanUpload