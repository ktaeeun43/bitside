import React from "react";
import { Outlet } from "react-router-dom";
import PolicyManagementLayout from "../templates/PolicyManagementLayout";

const Protect = () => {
    return (
        <>
        <Outlet />
        <PolicyManagementLayout>
            <h1>정보보호정책</h1>
        </PolicyManagementLayout>
        </>
    )
}

export default Protect;