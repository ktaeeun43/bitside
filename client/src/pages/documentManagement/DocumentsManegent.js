import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";
import Auth from "../../hoc/auth";

function DocumentsManagement() {
  const location = useLocation();
  const focus = location.pathname.split("/DocumentsManagement/")[1];



  return (
    <>
      <Outlet />
      {focus ? null :
      <DocumentManagementLayout>
        <div>DocumentsManegen</div>
      </DocumentManagementLayout>}
    </>
  );
}

export default Auth(DocumentsManagement,true);
