import React from "react";
import { Outlet } from "react-router-dom";
import CheckManagementLayout from "../templates/CheckManagementLayout";

const CheckDetail = () => {
  return (
    <>
      <Outlet />
      <CheckManagementLayout>
        <h1>정책관리</h1>
      </CheckManagementLayout>
    </>
  );
};

export default CheckDetail;
