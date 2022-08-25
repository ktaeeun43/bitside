import React from "react";
import { Outlet } from "react-router-dom";
import CheckManagementLayout from "../../templates/CheckManagementLayout"; 

function CheckManegent() {
  return (
    <>
      <Outlet />
      <CheckManagementLayout>
        <div>CheckManagement</div>
      </CheckManagementLayout>
    </>
  );
}

export default CheckManegent;
