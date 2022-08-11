import React, { useState } from 'react'
import styled from "styled-components";
import {
  COLOR_BRAND,
  COLOR_DISABLE_BUTTON,
  COLOR_FALL_BLUE,
  COLOR_FONT_DARK_GRAY,
  EXCHANGE_NAME,
  NAV_HEIGHT,COLOR_WHITE,COLOR_ABLE_BUTTON,
  COLOR_FONT_LOGIN_ID_PASSWORD,COLOR_LAYOUT_BACKGROUND
} from "../constants";
const BoxContainer = styled.div`
  flex: 1 0 0%;
  max-width: 370px;
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

const MidInputsContainer = styled.div``;

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


const Home = () =>{

  const [id ,setID] =useState("");
  const [password ,setPassword] = useState("");

  const onPressInputText = (e) => {
    if (e.key === "Enter") {
     return onClick();
    }
  }
  const  onChangeID = (e) => {
      setID(e.target.value);
    };
  
  const  onChangePassword = (e) => {
      setPassword(e.target.value);
    };
  const onClick = () => {
      let body = ({
          id: id,
          password: password

      })
    console.log("로그인",body);
    };
  return (
      <NoticeWrapper>
        <BoxContainer >
          <Wrapper >
            <TopContainer>
              <TopTitle >로그인</TopTitle>
            </TopContainer>
            <MidInputsContainer>
              <InputContainer>
                <InputLabel>ID</InputLabel>
                <Input
                  type={"input"}
                  placeholder="아이디를 입력해주세요"
                  onChange={onChangeID}
                  value={id}
                  />
              </InputContainer>
              <InputContainer>
                <InputLabel>비밀번호</InputLabel>
                <Input
                  type={"password"}
                  placeholder="비밀번호를 입력해주세요"
                  onChange={onChangePassword}
                  value={password}
                  onKeyDown={onPressInputText}
                />
              </InputContainer>
              <ButtonContainer>
                <Button onClick={onClick}>로그인하기</Button>
              </ButtonContainer>
            </MidInputsContainer>
          </Wrapper>
        </BoxContainer>
      </NoticeWrapper>
  )
}

export default Home