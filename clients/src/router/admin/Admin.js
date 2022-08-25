import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "../../templates/AdminLayout";

function Admin() {
  return (
    <>
      <Outlet />
      <AdminLayout>
      <div>d1d23</div>
      </AdminLayout>
      
    </>
  );
}

export default Admin;
