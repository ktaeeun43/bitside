import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SecurityCheckLayout from "../../templates/SecurityCheckLayout";
import Auth from "../../hoc/auth";

function SecurityCheck() {

  const location = useLocation();
  const focus = location.pathname.split("/SecurityCheck/")[1];


  return (
    <>
      <Outlet />
      {focus ? null : 
      <SecurityCheckLayout>
        <div>SecurityCheck</div>
      </SecurityCheckLayout>}
    </>
  );
}

export default Auth(SecurityCheck,true);
