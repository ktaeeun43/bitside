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

function SecurityPlanUpload() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.User);
  const [control, setControl] = useState("");
  const [protection , setProtection ] = useState("");
  const [urgency, setUrgency] = useState("");
  const [cost, setCost] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [priority, setPriority] = useState("");
  const [riskContents, setRiskContents] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [checkitem, setCheckItem] = useState("");

  function onChangeControl(event) {
    setControl(event.target.value);
  }
  function onChangeCheckItem(event) {
    setCheckItem(event.target.value);
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
  function onsubmit() {
    console.log('?????? ?????? ?????? ??????')
    let body = {
      writer: user.userData._id,
      controlarea: control,
      riskcontent: riskContents,
      checkitem: checkitem,
      //?????????
      riskdegree: riskLevel,
      //????????????
      protectplan: protection,
      //?????????
      urgency:urgency,
      //????????????
      implementcost: cost,
      //???????????????
      implementlevel: difficulty,
      //????????????
      priority: priority
    }
    let content2 = JSON.stringify(body);
    let body2 ={
      writer: user.userData._id,
      action: "?????? ?????? ?????? ??????",
      content: content2
    }
    axios.post(`/api/protectionData/upload`,body)
        .then((response) => {
          if (response.data.success) {
            axios.post(`/api/log/saveLog`,body2)
                    .then((response) => {
                      if (response.data.success) {
                      } else {
                      }
                    });
            alert("?????? ?????? ?????? ?????????????????????.")
            setTimeout(() => {
              navigate('/page/RiskManagement/securityplan')
            }, 1000);
          } else {
            alert("?????? ?????? ?????? ?????? ??????");
          }
        });
    console.log(body,"?????? ?????? ?????? ??????")
  }

  return (
    <>
    <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <Title>?????? ?????? ?????? ??????</Title>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeControl}
            value={control}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeCheckItem}
            value={checkitem}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeRiskContent}
            value={riskContents}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>?????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="???????????? ??????????????????."
            onChange={onChangeRiskLevel}
            value={riskLevel}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeProtection}
            value={protection}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>?????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="???????????? ??????????????????."
            onChange={onChangeUrgency}
            value={urgency}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeCost}
            value={cost}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>???????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="?????????????????? ??????????????????."
            onChange={onChangeDifficulty}
            value={difficulty}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangePriority}
            value={priority}
            />
          </InputWrapper>
          </RegisterInputWrapper>
          </Wrapper>
          <InBoxWrapper>
          <Button onClick={onsubmit}>????????????</Button>
          </InBoxWrapper>
          
        </BoxWrapper>
    </>
  )
}

export default SecurityPlanUpload