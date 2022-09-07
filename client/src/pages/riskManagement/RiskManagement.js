import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RiskManagementLayout from "../../templates/RiskManagementLayout";
import Auth from "../../hoc/auth";
import Risk from "./Risk";
import RiskCheckUpload from "./RiskCheckUpload";
import SecurityPlanUpload from "./SecurityPlanUpload";
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
margin: 10px
`;
const TitleWrapper = styled.div`
 display: flex;
 display: -webkit-box;
 -webkit-box-orient: horizental;
 justify-content: center;
 align-items: center;
 flex-direction: row;

 margin: 10px;
`;
function RiskManegement() {
  const location = useLocation();
  const focus = location.pathname.split("/RiskManagement/")[1];
  const [isRisk, setIsRisk] = useState(true);
  const [isRiskCheckUpload, setIsRiskCheckUpload] = useState(false);
  const [isSecurityPlanUpload, setIsSecurityPlanUpload] = useState(false);

  const onChangeRisk = () => {
    setIsRisk(true);
    setIsRiskCheckUpload(false);
    setIsSecurityPlanUpload(false);
  };
  
  const onChangeRiskCheck = () => {
    setIsRisk(false);
    setIsRiskCheckUpload(true);
    setIsSecurityPlanUpload(false);
  }

  const onChangeSecurityPlan = () => {
    setIsRisk(false);
    setIsRiskCheckUpload(false);
    setIsSecurityPlanUpload(true);
  }
  
  return (
    <>
      <Outlet />
      {focus ? null :
      <RiskManagementLayout>
        <TitleWrapper>
        <Button onClick={onChangeRisk}>위협분석</Button> 
        <Button onClick={onChangeRiskCheck}>위협평가</Button>
         <Button onClick={onChangeSecurityPlan}>정보보호계획</Button> 
        </TitleWrapper>
        {isRisk && <Risk />} 
        {isRiskCheckUpload && <RiskCheckUpload/>} 
        {isSecurityPlanUpload && <SecurityPlanUpload />} 
      </RiskManagementLayout>}
    </>
  );
}

export default Auth(RiskManegement,true);
