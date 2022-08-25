import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminLayout from "../../templates/AdminLayout";

function Admin() {
  const location = useLocation();
  const focus = location.pathname.split("/Admin/")[1];
  console.log("focus: " + focus);
  return (
    <>

      <Outlet />
      {focus ? null : 
      <AdminLayout>
      <div>d1d23</div>
      </AdminLayout>} 
      
    </>
  );
}

export default Admin;
