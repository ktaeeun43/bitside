import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AssetManagementLayout from "../../templates/AssetManagementLayout"; 

function AssetManagement() {

  const location = useLocation();
  const focus = location.pathname.split("/AssetManagement/")[1];

  return (
    <>
      <Outlet />
      {focus ? null : 
      <AssetManagementLayout>
        <div>AssetManagement</div>
      </AssetManagementLayout>}
    </>
  );
};

export default AssetManagement;
