import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AssetManagementLayout from "../../templates/AssetManagementLayout"; 
import Auth from "../../hoc/auth";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { useSelector } from "react-redux";

const RegisterWrapper = styled.div`
width: 100%;
flex: 1 0 auto;
display: flex;
flex-direction: column;
background-color: ${COLOR_LAYOUT_BACKGROUND};
min-height: calc(100vh - 110px);
width: '1280px'};
`;

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


function AssetManagement() {

  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.User);
  const focus = location.pathname.split("/AssetManagement/")[1];
  
  const [code, setCode] = useState("");
  const [host, setHost] = useState("");
  const [version, setVersion] = useState("");
  const [ip, setIp] = useState("");
  const [purpose, setPurpose] = useState("");
  const [position, setPosition] = useState("");
  const [manager, setManager] = useState("")
  const [risk, setRisk] = useState("");
  const [service, setService] = useState("");

  const [production, setProduction] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  function onChangeService(event) {
    setService(event.target.value);
  }

  function onChangeRisk(event) {
    setRisk(event.target.value);
  }

  function onChangeManager(event){
    setManager(event.target.value);
  }

  function onChangePosition(event){
    setPosition(event.target.value);
  }

  function onChangePurpose(event) {
    setPurpose(event.target.value);
  }

  function onChangeIp(event) {
    setIp(event.target.value);
  }

  function onChangeVersion(event) {
    setVersion(event.target.value);
  }

  function onChangeHost(event) {
    setHost(event.target.value);
  }

  function onChangeCode(event) {
    setCode(event.target.value);
  }

  function onChangeProduction(event) {
    setProduction(event.target.value);
  }

  function onChangeType(event) {
    setType(event.target.value);
  }

  function onChangeLevel(event) {
    setLevel(event.target.value);
  }
  function onsubmit(event) {
    let body = {
      writer: user.userData._id,
      status: production,
      type: type,
      assetcode: code,
      hostname:host,
      version: version,
      IPadress: ip,
      usetype: purpose,
      location: position,
      employee: manager,
      level: level,
      trouble: risk,

    }
    let content2 = JSON.stringify(body);
    let body2 ={
      writer: user.userData._id,
      action: "?????? ?????? ??????",
      content: content2
    }
    axios.post(`/api/asset/upload`,body)
        .then((response) => {
          if (response.data.success) {
            axios.post(`/api/log/saveLog`,body2)
                    .then((response) => {
                      if (response.data.success) {
                      } else {
                      }
                    });
            alert("????????? ?????????????????????.")
            setTimeout(() => {
              navigate('/page/AssetManagement/list')
            }, 1000);
          } else {
            alert("?????? ?????? ??????");
          }
        });
    console.log(body,"????????????")
  }

  return (
    <>
      <Outlet />
      {focus ? null : 
      <AssetManagementLayout>
        <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <Title>?????? ??????</Title>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>No</InputLabel>
          </InputWrapper>
          <InputWrapper>
          <InputLabel>??????</InputLabel>
          <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={production}
             label=""
             onChange={onChangeProduction}
             >
          <MenuItem value={"??????"}>??????</MenuItem>
          <MenuItem value={"?????????"}>?????????</MenuItem>
          </Select>
          </InputWrapper>
          <InputWrapper>
          <InputLabel>??????</InputLabel>
          <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={type}
             label=""
             onChange={onChangeType}
             >
          <MenuItem value={"windows"}>windows</MenuItem>
          <MenuItem value={"linux"}>linux</MenuItem>
          <MenuItem value={"mac"}>mac</MenuItem>
          <MenuItem value={"??????"}>??????</MenuItem>
          </Select>
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="????????? ??????????????????."
            onChange={onChangeCode}
            value={code}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>Hostname</InputLabel>
          <Input 
            type={"input"}
            placeholder="host??? ??????????????????."
            onChange={onChangeHost}
            value={host}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>Version</InputLabel>
          <Input 
            type={"input"}
            placeholder="version??? ??????????????????."
            onChange={onChangeVersion}
            value={version}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>IP Address</InputLabel>
          <Input 
            type={"input"}
            placeholder="IP??? ??????????????????."
            onChange={onChangeIp}
            value={ip}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>??????</InputLabel>
          <Input 
            type={"input"}
            placeholder="????????? ??????????????????."
            onChange={onChangePurpose}
            value={purpose}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>??????</InputLabel>
          <Input 
            type={"input"}
            placeholder="????????? ??????????????????."
            onChange={onChangePosition}
            value={position}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>?????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="????????? ??????????????????."
            onChange={onChangeManager}
            value={manager}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>??????</InputLabel>
          <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={level}
             label=""
             onChange={onChangeLevel}
             >
          <MenuItem value={"L"}>L</MenuItem>
          <MenuItem value={"H"}>H</MenuItem>
          <MenuItem value={"M"}>M</MenuItem>
          </Select>
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeRisk}
            value={risk}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>?????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="???????????? ??????????????????."
            onChange={onChangeService}
            value={service}
            />
          </InputWrapper>
          </RegisterInputWrapper>
          </Wrapper>
          <InBoxWrapper>
          <Button onClick={onsubmit}>????????????</Button>
          </InBoxWrapper>
        </BoxWrapper>

      </AssetManagementLayout>}
    </>
  );
};

export default Auth(AssetManagement,true);
