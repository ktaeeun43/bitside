import React from "react";
import { Outlet } from "react-router-dom";
import RiskManagementLayout from "../../templates/RiskManagementLayout";
function RiskManegement() {
  return (
    <>
      <Outlet />
      <RiskManagementLayout>
        <div>RiskManagement</div>
      </RiskManagementLayout>
    </>
  );
}

export default RiskManegement;
