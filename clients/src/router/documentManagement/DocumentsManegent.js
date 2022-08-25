import React from "react";
import { Outlet } from "react-router-dom";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";

function DocumentsManagement() {
  return (
    <>
      <Outlet />
      <DocumentManagementLayout>
        <div>DocumentsManegen</div>
      </DocumentManagementLayout>
    </>
  );
}

export default DocumentsManagement;
