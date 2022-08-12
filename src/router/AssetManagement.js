import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AssetManagementLayout from "../templates/AssetManagementLayout";
const AssetManagement = () => {
  return (
    <>
      <Outlet />
      <AssetManagementLayout>
        <div>AssetManagement</div>
      </AssetManagementLayout>
    </>
  );
};

export default AssetManagement;
