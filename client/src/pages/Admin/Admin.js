import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminLayout from "../../templates/AdminLayout";
import Auth from "../../hoc/auth";
function Admin() {
  const location = useLocation();
  const focus = location.pathname.split("/Admin/")[1];

  return (
    <>

      <Outlet />
      {focus ? null : 
      <AdminLayout>
      <h1>Admin</h1>
      </AdminLayout>} 
      
    </>
  );
}

export default Auth(Admin,true);
