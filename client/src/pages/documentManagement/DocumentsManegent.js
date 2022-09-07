import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";
import Auth from "../../hoc/auth";
import Receipt from "./Receipt";
import ReceiptWirte from "./ReceiptWirte";
import DocumentWrite from "./DocumentWrite";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";

const TitleWrapper = styled.div`
 display: flex;
 display: -webkit-box;
 -webkit-box-orient: horizental;
 justify-content: center;
 align-items: center;
 flex-direction: row;

 margin: 10px;
`;
const Button = styled.div`

width: 300px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
padding: 0.3rem 0.875rem;
color: ${COLOR_WHITE};
font-size: 0.875rem;
background-color: ${COLOR_ABLE_BUTTON};
cursor: pointer;
border-radius: 4px;
word-break: keep-all;
margin: 10px
`;

function DocumentsManagement() {
  const location = useLocation();
  const focus = location.pathname.split("/DocumentsManagement/")[1];
  const [isReceiptWrite, setIsReceiptWrite] = useState(true);
  const [isDocumentWrite, setIsDocumentWrite] = useState(false);

  const onChangeWrite = () => {
    setIsReceiptWrite(true);
    setIsDocumentWrite(false);
  };

  const onChangeDocumentWrite = () => {
    setIsReceiptWrite(false);
    setIsDocumentWrite(true);
  };

  return (
    <>
      <Outlet />
      {focus ? null :
      <DocumentManagementLayout>
        <TitleWrapper>
          <Button onClick={onChangeWrite}>증적목록</Button>
          <Button onClick={onChangeDocumentWrite}>운영명세서</Button>
        </TitleWrapper>
      {isReceiptWrite && <DocumentWrite />}
      {isDocumentWrite && <ReceiptWirte />}
      </DocumentManagementLayout>}
    </>
  );
}

export default Auth(DocumentsManagement,true);
