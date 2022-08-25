import React from "react";
import { Outlet } from "react-router-dom";
import PolicyManagementLayout from "../../templates/PolicyManagementLayout";

function PolicyManagement() {
  return (
    <>
      <Outlet />
        <PolicyManagementLayout>
        <div>PolicyManagement</div>
        </PolicyManagementLayout>

    </>
  );
}

export default PolicyManagement;
