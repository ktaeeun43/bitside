import React, { useState } from "react";
import AdminLayout from "../../templates/AdminLayout";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
 margin: ${(props) => (props.isMobile ? "0 auto" : "60px auto")};
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


const AdminRegister = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [mail, setMail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [checkPasswordError, setCheckPasswordError] = useState("")
    const [password, setPassword] = useState("");
    
    const [idError, setIdError] = useState("");
    const [passWordError, setPasswordError] = useState("");
    const [mailError, setMailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [departmentError, setdepartmentError] = useState("");
    const [phoneNumberError, setphoneNumberError] = useState("");
    const [role, setRole] = useState('');


    function onChangeRole(event) {
        setRole(event.target.value);
    }

    function onChangePhoneNumber(event) {
        setPhoneNumber(event.target.value);
        if (event.target.value !== "") {
            setphoneNumberError("");
        }
    }

    function onChangeMail(event) {
        setMail(event.target.value);
        if (event.target.value !== "") {
            setMailError("");
        }
    }


    function onChangeDepartment(event) {
        setDepartment(event.target.value);
        if (event.target.value !== "") {
            setdepartmentError("");
        }
    }

    function onChangeId(event) {
        setId(event.target.value);
        if (event.target.value !== "") {
            setIdError("");
        }
    }

    function onChangeName(event) {
        setName(event.target.value);
        if (event.target.value !== "") {
            setNameError("");
        }
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
        if(event.target.value !== "") {
            setPasswordError("");
        }
    }

    function onChangeCheckPassword(event) {
        setCheckPasswordError(event.target.value);
        if (event.target.value !== "") {
            setCheckPasswordError("");
        }
    }



    async function onClickRegister() {
        if(id === "") {
            setIdError("계정이 입력되지 않았습니다.")
        }

        if(name === "") {
            setNameError("이름이 입력되지 않았습니다.")
            return;
        }

        if(password === "") {
            setPasswordError("비밀번호가 입력되지 않았습니다.")
            return;
        }
        
        if(checkPasswordError === "") {
            setCheckPasswordError("확인 비밀번호가 입력되지 않았습니다.")
            return;
        }

        if (/\w+@\w+\.\w+/.test(mail) === false) {
        alert("이메일 형식이 아닙니다!");
        return;
        }

        if (password !== setPassword) {
            return;
        }
    }

    return (
        <>
        <AdminLayout>
            <BoxWrapper>
                <Wrapper>
                    <TitleWrapper>
                        <Title>유저 등록</Title>
                    </TitleWrapper>
                    <RegisterInputWrapper>
                        <InputWrapper>
                        <InputLabel>계정</InputLabel>
                        <Input 
                            type={"input"}
                            placeholder="계정을 입력해주세요."
                            onChange={onChangeId}
                            value={id}
                        />
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabel>이름</InputLabel>
                            <Input 
                                type={"input"}
                                placeholder="이름을 입력해주세요."
                                onChange={onChangeName}
                                value={name}
                            />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>부서명</InputLabel>
                        <Input 
                            type={"input"}
                            placeholder="부서명을 입력해주세요."
                            onChange={onChangeDepartment}
                            value={department}
                        />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>권한</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            label=""
                            onChange={onChangeRole}
                            >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        </Select>
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>메일</InputLabel>
                        <Input 
                            type={"input"}
                            placeholder="메일 주소를 입력해주세요."
                            onChange={onChangeMail}
                            value={mail}
                        />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>연락처</InputLabel>
                        <Input 
                            type={"input"}
                            placeholder="연락처를 입력해주세요."
                            onChange={onChangePhoneNumber}
                            value={phoneNumber}
                        />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>비밀번호</InputLabel>
                        <Input 
                            type={"password"}
                            placeholder="비밀번호를 입력해주세요."
                            onChange={onChangePassword}
                            value={password}
                        />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>비밀번호 확인</InputLabel>
                        <Input 
                            type={"password"}
                            placeholder="비밀번호를 한번 더 입력해주세요."
                            onChange={onChangeCheckPassword}
                            value={setCheckPasswordError}
                        />
                        </InputWrapper>
                        <BoxWrapper>
                            <Button onClick={onClickRegister}>등록하기</Button>
                        </BoxWrapper>
                    </RegisterInputWrapper>
                </Wrapper>
            </BoxWrapper>
        </AdminLayout>
        </>
    )
};

export default AdminRegister