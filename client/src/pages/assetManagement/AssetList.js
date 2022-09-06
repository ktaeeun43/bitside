import React from "react";
import { Outlet } from "react-router-dom";
import AssetManagementLayout from "../../templates/AssetManagementLayout"; 
const AssetList = () => {
  return (
    <>
      <AssetManagementLayout>
        <h1>자산목록</h1>
      </AssetManagementLayout>
    </>
  );
};

export default AssetList;
