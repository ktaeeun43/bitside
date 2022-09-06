import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PolicyManagementLayout from "../../templates/PolicyManagementLayout";
import Auth from "../../hoc/auth";
function PolicyManagement() {
  const location = useLocation();
  const focus = location.pathname.split("/PolicyManagement/")[1];

  return (
    <>
      <Outlet />
      {focus ? null :
        <PolicyManagementLayout>
        <div>PolicyManagement</div>
        </PolicyManagementLayout>}

    </>
  );
}

export default Auth(PolicyManagement, true);
