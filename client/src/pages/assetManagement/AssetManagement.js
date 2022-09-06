import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AssetManagementLayout from "../../templates/AssetManagementLayout"; 
import Auth from "../../hoc/auth";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";

const RegisterWrapper = styled.div`
width: 100%;
flex: 1 0 auto;
display: flex;
flex-direction: column;
background-color: ${COLOR_LAYOUT_BACKGROUND};
min-height: calc(100vh - 110px);
width: '1280px'};
`;

const Wrapper = styled.div`
height: ${(props) => (props.isMobile ? "100%" : "")};
display: flex;
flex-direction: column;
background-color: white;
border: 1px solid rgb(230, 230, 230);
padding: ${(props) => (props.isMobile ? "1.1875rem" : "40px 20px")};
overflow: auto;
`;

const BoxWrapper = styled.div`
 flex: 1 0 0%;
 max-width: 370px;
 width: 100%;
 margin: ${(props) => (props.isMobile ? "0 auto" : "20px auto")};
 position: relative;
`;

const TitleWrapper = styled.div`
 display: flex;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const Title = styled.div`
  width: 70%;
  padding-bottom: ${(props) => (props.isMobile ? "10px" : "18px")};
  display: flex;
  justify-content: center;
  font-size: 23px;
  color: #02215e;
`;

const RegisterInputWrapper = styled.div`
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const InputLabel = styled.label`
  margin-left: 20px;
  font-size: 12px;
  color: #727272;
  margin: 0px;
`;

const Input = styled.input`
  margin-top: 10px;
  font-size: 12px;
  color: #033e93;
  height: 30px;
  border: 1px solid rgb(200, 200, 200);
  padding-left: 10px;
  padding-right: 10px;
`;

const Button = styled.div`
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
`;


function AssetManagement() {

  const location = useLocation();
  const focus = location.pathname.split("/AssetManagement/")[1];

  return (
    <>
      <Outlet />
      {focus ? null : 
      <AssetManagementLayout>
        <h1> 자산 등록 하기</h1>

      </AssetManagementLayout>}
    </>
  );
};

export default Auth(AssetManagement,true);
