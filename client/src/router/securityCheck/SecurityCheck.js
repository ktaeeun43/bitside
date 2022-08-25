import React from "react";
import { Outlet } from "react-router-dom";
import SecurityCheckLayout from "../../templates/SecurityCheckLayout";

function SecurityCheck() {
  return (
    <>
      <Outlet />
      <SecurityCheckLayout>
        <div>SecurityCheck</div>
      </SecurityCheckLayout>
    </>
  );
}

export default SecurityCheck;
