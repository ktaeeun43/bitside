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
        <h1>증적자료 업로드</h1>
          <form encType='multipart/form-data'>
            <input type='file' name='file' />
            <button type='submit'>업로드</button>
        </form>
      </DocumentManagementLayout>}
    </>
  );
}

export default Auth(DocumentsManagement,true);
