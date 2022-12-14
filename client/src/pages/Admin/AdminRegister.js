import React, { useState } from "react";
import AdminLayout from "../../templates/AdminLayout";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_actions";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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


const AdminRegister = (props) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [mail, setMail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [checkPasswordError, setCheckPasswordError] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [idError, setIdError] = useState("");
    const [passWordError, setPasswordError] = useState("");
    const [mailError, setMailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [departmentError, setdepartmentError] = useState("");
    const [phoneNumberError, setphoneNumberError] = useState("");
    const user = useSelector((state) => state.User);
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
       
    }



    async function onClickRegister(e) {
        e.preventDefault();
        let body = {
            email: id,
            name: name,
            department: department,
            role: role,
            phoneNumber: phoneNumber,
            password: password
        }
        let body2 = {
            email: id,
            name: name,
            department: department,
            role: role,
            phoneNumber: phoneNumber,
        }
        let content = JSON.stringify(body2)
        let body3 = {
            writer: user.userData._id,
            content: content,
            action: "????????????",
        }
        if(id === "") {
            setIdError("????????? ???????????? ???????????????.")
        }

        if(name === "") {
            setNameError("????????? ???????????? ???????????????.")
            return;
        }

        if(password === "") {
            setPasswordError("??????????????? ???????????? ???????????????.")
            return;
        }
        
        if(checkPasswordError === "") {
            setCheckPasswordError("?????? ??????????????? ???????????? ???????????????.")
            return;
        }
        if (user.userData.isAdmin === true) {

            dispatch(registerUser(body)).then(response => {
                if (response.payload.success) {
                    axios.post(`/api/log/saveLog`,body3)
                    .then((response) => {
                    if (response.data.success) {
                        console.log("??????????????????")
                      } else {
                      }
                    });
                    alert("?????? ?????? ??????!");
                    return navigate('/page/Admin')
                } else {
                    alert(response.payload.err.errmsg)
                }
            })
        } else {
            alert("????????? ????????????")
        }
        
    }

    return (
        <>
        <AdminLayout>
            <BoxWrapper>
                <Wrapper>
                    <TitleWrapper>
                        <Title>?????? ??????</Title>
                    </TitleWrapper>
                    <RegisterInputWrapper>
                        <InputWrapper>
                        <InputLabel>??????</InputLabel>
                        <Input 
                            type={"input"}
                            placeholder="????????? ??????????????????."
                            onChange={onChangeId}
                            value={id}
                        />
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabel>??????</InputLabel>
                            <Input 
                                type={"input"}
                                placeholder="????????? ??????????????????."
                                onChange={onChangeName}
                                value={name}
                            />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>?????????</InputLabel>
                        <Input 
                            type={"input"}
                            placeholder="???????????? ??????????????????."
                            onChange={onChangeDepartment}
                            value={department}
                        />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>??????</InputLabel>
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
                        <InputLabel>?????????</InputLabel>
                        <Input 
                            type={"input"}
                            placeholder="???????????? ??????????????????."
                            onChange={onChangePhoneNumber}
                            value={phoneNumber}
                        />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>????????????</InputLabel>
                        <Input 
                            type={"password"}
                            placeholder="??????????????? ??????????????????."
                            onChange={onChangePassword}
                            value={password}
                        />
                        </InputWrapper>
                        <InputWrapper>
                        <InputLabel>???????????? ??????</InputLabel>
                        <Input 
                            type={"password"}
                            placeholder="??????????????? ?????? ??? ??????????????????."
                            onChange={onChangeCheckPassword}
                            value={checkPasswordError}
                        />
                        </InputWrapper>
                        <BoxWrapper>
                            <Button onClick={onClickRegister}>????????????</Button>
                        </BoxWrapper>
                    </RegisterInputWrapper>
                </Wrapper>
            </BoxWrapper>
        </AdminLayout>
        </>
    )
};

export default AdminRegister