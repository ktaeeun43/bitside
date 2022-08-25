import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CheckManagementLayout from "../../templates/CheckManagementLayout"; 

function CheckManegent() {
  const location = useLocation();
  const focus = location.pathname.split("/CheckManegent/")[1];


  return (
    <>
      <Outlet />
      {focus ? null : 
      <CheckManagementLayout>
        <div>CheckManagement</div>
      </CheckManagementLayout>}
    </>
  );
}

export default CheckManegent;
