import React from "react";
import { Link, Navigate } from "react-router-dom";
import navList from "../atom/navList";
import navRightList from "../atom/navRightList";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import {
  COLOR_BRAND,
  COLOR_DARK_BACKGROUND,
  COLOR_FONT_ON_STRONG_COLOR,
  COLOR_FOOTER_BACKGROUND,
  COLOR_HEADER,
  COLOR_HEADER_BACKGROUND,
  COLOR_WHITE,
  NAV_HEIGHT,
} from "../constants";
import axios from "axios";

const NavContainer = styled.nav`
  position: flex;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${NAV_HEIGHT};
  background-color: ${COLOR_HEADER_BACKGROUND};
  padding-right: 30px;
  padding-left: 30px;
  box-sizing: border-box;
`;
const AppContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 98px;
  right: 300px;
  width: 120px;
  height: 120px;
  background-color: red;
  box-sizing: border-box;
`;
//border-bottom: 1px solid #d3d3d3; 네브바 하단줄

const FloatingNoticeWrapper = styled.div`
  background-color: #4449ac;
  border-radius: 5px;
  padding: 1.125rem;
  color: ${COLOR_WHITE};
  overflow: hidden;
`;
const NavWrapper = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 20px;
  width: 114.5px;
  height: 27px;
  object-fit: contain;
  cursor: pointer;
`;

const LogoLetter = styled.div`
  font-weight: bold;
  color: black;
  margin-right: 40px;
  cursor: pointer;
`;

const LeftSideLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.9375rem;
  cursor: pointer;
  text-decoration: none;
  color: ${COLOR_WHITE};
  height: ${NAV_HEIGHT};
  font-weight: bold;

  &:hover {
    background-color: ${COLOR_WHITE};
    color: ${COLOR_BRAND};
    text-decoration: none;
  }
`;
const LeftSideSelectLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.9375rem;
  cursor: pointer;
  text-decoration: none;
  color: ${COLOR_WHITE};
  height: ${NAV_HEIGHT};
  font-weight: bold;
  background-color: ${COLOR_WHITE};
  color: ${COLOR_BRAND};
`;
const RightSideSelectLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.9375rem;
  cursor: pointer;
  text-decoration: none;
  color: ${COLOR_WHITE};
  height: ${NAV_HEIGHT};
  font-weight: bold;
  background-color: ${COLOR_WHITE};
  color: ${COLOR_BRAND};
`;
/* 호버시 색반전
const LeftSideLinkHover = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.9375rem;
  cursor: pointer;
  color: ${COLOR_WHITE};
  height: ${NAV_HEIGHT};
  &:hover{
    background-color: ${COLOR_WHITE};  
    color: ${COLOR_BRAND};
  }
`;
*/
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSideLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.9375rem;
  cursor: pointer;
  text-decoration: none;
  color: ${COLOR_WHITE};
  height: ${NAV_HEIGHT};
  font-weight: bold;
  &:hover {
    background-color: ${COLOR_WHITE};
    color: ${COLOR_BRAND};
    text-decoration: none;

  }
`;
const RightSideTime = styled.div`
  margin-left: 20px;
  margin-right: 10px;
  font-size: 0.9375rem;
  color: ${COLOR_WHITE};
  cursor: pointer;

`;
const RightSideAppLink = styled.div`
  margin-left: 20px;
  font-size: 0.9375rem;
  height: 100px;
  align-items: center;
  cursor: pointer;
`;

const Select = styled.select`
  margin-left: 30px;
  font-size: 0.9375rem;
  background-color: #d3d3d3;
  background-color: ${COLOR_HEADER_BACKGROUND};
  color: ${COLOR_WHITE};
  border: 0;
`;

const DropdownContainer = styled.div`
  position: absolute;
  left: 0;
  top: ${NAV_HEIGHT};
`;

const DropdownAnchor = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 45px;
  width: 140px;
  background-color: rgb(40, 40, 40);

  &:hover {
    background-color: rgb(55, 55, 55);
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  margin-left: 3px;
`;

const Image = styled.img``;

const Linker = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const focus = location.pathname.split("/")[2];
  const userName = window.localStorage.getItem("userName");
  let today =  new Date();
  let dday = new Date(2022,9,9);
  let gap = today.getTime() - dday.getTime();
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  let result = Math.ceil( );
  const onClickLogOut = () =>{
    axios.get( `/api/users/logout`).then(response => {
       if(response.data.success) {
        window.localStorage.setItem("userName" , "");
        return navigate('/login')
       } else {
        alert("Log Out Failed");
       }

    })
  }

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <LeftSide>
            <Link to={`/`}>
              <Logo src={process.env.REACT_APP_PUBLIC_LOGO_PATH} />
            </Link>
            {navList.map(({ title, path }) => {
              return (
                <Link style={{ textDecoration: "none" }} to={`/page/${path}`}>
                  {focus === path ? (
                    <LeftSideSelectLink key={path}>{title}</LeftSideSelectLink>
                  ) : (
                    <LeftSideLink key={path}>{title}</LeftSideLink>
                  )}
                </Link>
              );
            })}
          </LeftSide>
          <RightSide>

            <RightSideTime>심사까지 D {day}&nbsp;</RightSideTime>
            {navRightList.map(({ title, path }) => {
              return (
                <Link style={{ textDecoration: "none" }} to={`/page/${path}`}>
                  {focus === path ? (
                    <RightSideSelectLink key={path}>
                      {title}
                    </RightSideSelectLink>
                  ) : (
                    <RightSideLink key={path}>{title}</RightSideLink>
                  )}
                </Link>
              );
            })}
            <RightSideTime>{userName} 님</RightSideTime>
            { userName ? 
              <RightSideTime onClick={onClickLogOut}>로그아웃</RightSideTime>
              :
              null 
            }
          </RightSide>
        </NavWrapper>
      </NavContainer>
    </>
  );
}

export default Nav;
