import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RiskManagementLayout from "../../templates/RiskManagementLayout";
import Auth from "../../hoc/auth";
import Risk from "./Risk";
import RiskCheckUpload from "./RiskCheckUpload";
import SecurityPlanUpload from "./SecurityPlanUpload";

function RiskManegement() {
  const location = useLocation();
  const focus = location.pathname.split("/RiskManagement/")[1];
  const [isRisk, setIsRisk] = useState(true);
  const [isRiskCheckUpload, setIsRiskCheckUpload] = useState(false);
  const [isSecurityPlanUpload, setIsSecurityPlanUpload] = useState(false);

  const changeRisk = () => {
    setIsRisk((check) => !check);
  };
  
  const changeRiskCheck = () => {
    setIsRiskCheckUpload((check) => !check);
  }
  
  return (
    <>
      <Outlet />
      {focus ? null :
      <RiskManagementLayout>
        <button onClick={changeRisk}>선택하기</button> 
        {isRisk && <Risk />} 
        <RiskCheckUpload/>
        <SecurityPlanUpload />
      </RiskManagementLayout>}
    </>
  );
}

export default Auth(RiskManegement,true);
