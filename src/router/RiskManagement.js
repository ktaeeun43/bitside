import React from "react";
import { Outlet } from "react-router-dom";
import RiskManagementLayout from "../templates/RiskManagementLayout";
function RiskManegement() {
  return (
    <>
      <Outlet />
      <RiskManagementLayout>
        <div>RiskManegent</div>
      </RiskManagementLayout>
    </>
  );
}

export default RiskManegement;
