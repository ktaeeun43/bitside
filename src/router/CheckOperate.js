import React from "react";
import { Outlet } from "react-router-dom";
import CheckManagementLayout from "../templates/CheckManagementLayout";

const CheckOperate = () => {
    return (
        <>
        <Outlet />
        <CheckManagementLayout>
            <h1>관리체계 수립 및 운영</h1>
        </CheckManagementLayout>
        </>
    );
};

export default CheckOperate;