import React from "react";
import { Outlet } from "react-router-dom";
import DocumentManagementLayout from "../templates/DocumentManagementLayout";

function DocumentsManegent() {
  return (
    <>
      <Outlet/>
      <DocumentManagementLayout>
        <div>DocumentsManegent</div>
      </DocumentManagementLayout>
    </>
  );
}

export default DocumentsManegent;
