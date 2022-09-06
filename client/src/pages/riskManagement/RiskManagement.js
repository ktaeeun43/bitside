import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import RiskManagementLayout from "../../templates/RiskManagementLayout";
import Auth from "../../hoc/auth";

function RiskManegement() {
  const location = useLocation();
  const focus = location.pathname.split("/RiskManagement/")[1];


  return (
    <>
      <Outlet />
      {focus ? null :
      <RiskManagementLayout>
        <div>RiskManagement</div>
      </RiskManagementLayout>}
    </>
  );
}

export default Auth(RiskManegement,true);
