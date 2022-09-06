import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PolicyManagementLayout from "../../templates/PolicyManagementLayout";
import Auth from "../../hoc/auth";
function PolicyManagement() {
  const location = useLocation();
  const focus = location.pathname.split("/PolicyManagement/")[1];

  return (
    <>
      <Outlet />
      {focus ? null :
        <PolicyManagementLayout>
          <h1>정책 업로드</h1>
          <form encType='multipart/form-data'>
            <input type='file' name='file' />
            <button type='submit'>업로드</button>
        </form>
        </PolicyManagementLayout>}

    </>
  );
}

export default Auth(PolicyManagement, true);
