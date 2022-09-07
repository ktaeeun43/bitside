import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";

import {
  COLOR_BRAND,
  COLOR_DISABLE_BUTTON,
  COLOR_FALL_BLUE,
  COLOR_FONT_DARK_GRAY,
  EXCHANGE_NAME,
  NAV_HEIGHT,
  COLOR_WHITE,
  COLOR_ABLE_BUTTON,
  COLOR_FONT_LOGIN_ID_PASSWORD,
  COLOR_LAYOUT_BACKGROUND,
} from "../constants";
import { useDispatch } from "react-redux";
import { loginUser } from "../_actions/user_actions";
import { Link, Navigate, useNavigate } from "react-router-dom";
const BoxContainer = styled.div`
  flex: 1 0 0%;
  max-width: 700px;
  width: 100%;
  margin: ${(props) => (props.isMobile ? "0 auto" : "60px auto")};
  position: relative;
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
const NotiWrapper = styled.div`
  height: ${(props) => (props.isMobile ? "100%" : "")};
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgb(230, 230, 230);
  padding: ${(props) => (props.isMobile ? "1.1875rem" : "40px 20px")};
  overflow: auto;
  `;
  const MidInputsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  `;

const TopContainer = styled.div`
  display: flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopTitle = styled.div`
  width: 70%;
  padding-bottom: ${(props) => (props.isMobile ? "10px" : "18px")};
  display: flex;
  justify-content: center;
  font-size: 23px;
  color: #02215e;
`;

const TopWelcome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 12px;
`;


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const InputLabel = styled.label`
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

const RecaptchaContainer = styled.div`
  display: flex;
  display: -webkit-box;
  justify-content: center;
  margin-top: 40px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

const CreateAccountButton = styled.button`
  width: 100%;
  height: 35px;
  border: 0;
  font-size: 15px;
  font-color: ${COLOR_FONT_LOGIN_ID_PASSWORD};
  background-color: ${(props) =>
    props.isRecaptchaVerified ? COLOR_BRAND : COLOR_DISABLE_BUTTON};
  color: ${(props) => (props.isRecaptchaVerified ? "white" : "#727272")};
  cursor: pointer;
`;
const NoticeWrapper = styled.div` 
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    background-color: ${COLOR_LAYOUT_BACKGROUND};
    min-height: calc(100vh - 110px);
    width: '1280px'};
`;

const AdditionalOptionContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const LeadToResetPassword = styled.div`
  margin-left: 4px;
  font-size: 12px;
  color: ${COLOR_FONT_DARK_GRAY};
  cursor: pointer;
  color: #727272;
  cursor: pointer;
`;

const LeadToSignup = styled.div`
  margin-left: 4px;
  font-size: 12px;
  color: #1c5eeb;
  cursor: pointer;
`;

const UrlContainer = styled.div`
  margin-top: ${(props) => (props.isMobile ? "8px" : "20px")};
`;

const UrlGuide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #9d9d9d;
  margin-bottom: 8px;
`;

const Url = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: #4a4a4a;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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

const StyledTableRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledTableColumn = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Table = styled.div`
  display: table;
  width: "100%";
`;

const TableCell = styled.td`
  display: flex;
  border-top: 1px solid #e9eaef;
  border-left: 1px solid #e9eaef;
  &:last-child {
    border-right: 1px solid #e9eaef;
  }
  border-right: 1px solid #e9eaef;
  display: flex;
  width: 100%;
`;
const StyledTableCellTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 12rem;
  text-align: start;
  background-color: #f5f5f7;
  padding: 1.2rem 1.6rem;
  width: 12rem;
  flex: 0 0 10rem;
`;

const StyledTableCellValue = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 12rem;
  padding: 1.1rem 1rem;
`;

const Home = () => {
  const [ anouncement, setAnouncements] = useState([])
  useEffect(() => {
    //기존의 landingPage에 있는 코드 재사용
    axios.get("/api/anouncement/getAnouncements").then((response) => {
      if (response.data.success) {
        const announcements = [ ...response.data.anouncements].sort().reverse()
        setAnouncements(announcements);
        console.log(announcements,"공지")
      } else {
        alert("유저 가져오기 실패!");
      }
    });
  }, []);
  return (
    <NoticeWrapper>
      <BoxContainer>
        <Wrapper>
          <MidInputsContainer>
            Bitvelo ISMS 인증 프로그램
          </MidInputsContainer>
        </Wrapper>
          <NotiWrapper>
          <MidInputsContainer>
            공지사항
          </MidInputsContainer>
           {anouncement.map((anouncement) => {
             let createdAt =  moment(anouncement.createdAt).format("YYYY-MM-DD")
          return (
            <div>
            <Link style={{ textDecoration: "none" }} to={`/page/Admin/anouncement?${anouncement._id}`} >
                  <StyledTableRow key={anouncement._id}>
                    <TableCell>
                      <StyledTableCellValue>{anouncement.type}</StyledTableCellValue>
                      <StyledTableCellValue>{anouncement.title}</StyledTableCellValue>
                      <StyledTableCellValue>{createdAt}</StyledTableCellValue>
                    </TableCell>
                  </StyledTableRow>
            </Link>
                </div>
              );
            })}
            </NotiWrapper>
            </BoxContainer>
    </NoticeWrapper>
  );
};

export default Home;
