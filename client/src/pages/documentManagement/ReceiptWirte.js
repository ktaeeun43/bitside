import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";


const Wrapper = styled.div`
height: ${(props) => (props.isMobile ? "100%" : "")};
display: flex;
flex-direction: column;
background-color: white;
border: 1px solid rgb(230, 230, 230);
padding: ${(props) => (props.isMobile ? "1.1875rem" : "40px 20px")};
overflow: auto;
`;

const TitleWrapper = styled.div`
 display: flex;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const BoxTitle = styled.div`
  width: 70%;
  padding-bottom: ${(props) => (props.isMobile ? "10px" : "18px")};
  display: flex;
  justify-content: center;
  font-size: 23px;
  color: #02215e;
`;

const RegisterInputWrapper = styled.div`
justify-content: center;

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
`;

const BoxWrapper = styled.div`
 flex: 1 0 0%;
 max-width: 1000px;
 width: 100%;
 margin: ${(props) => (props.isMobile ? "0 auto" : "20px auto")};
 position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const InBoxWrapper = styled.div`
padding: 30px;
display:flex;
justify-content: center;
`;


const Table = styled.div`
  display: table;
  width: 100%;
`;
const Title = styled.div`
  padding: 10px;
  font-size: 25px;
`;

const StyledTableRow = styled.tr`
  display: flex;
`;
const TableCell = styled.td`
  display: flex;
  border-top: 1px solid #e9eaef;
  border-left: 1px solid #e9eaef;
  border-right: 1px solid #e9eaef;
  display: flex;
`;

const StyledTableCellTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  flex: 0 0 4.8rem;
  padding: 1rem 2.2rem;
  word-break: keep-all;
`;

function ReceiptWirte() {
    const [index, setIndex] = useState("");
  const [controlItem, setControlItem] = useState("");
  const [content, setContent] = useState("");
  const [operation, setOperation] = useState("");
  const [status, setStatus] = useState("");
  const [document, setDocument] = useState("");
  const [record, setRecord] = useState("");
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();

  function onChangeIndex(event) {
    setIndex(event.target.value);
  }

  function onChangeControlItem(event) {
    setControlItem(event.target.value);
  }

  function onChangeContent(event) {
    setContent(event.target.value);
  }

  function onChangeOperation(event) {
    setOperation(event.target.value);
  }

  function onChangeStatus(event) {
    setStatus(event.target.value);
  }

  function onChangeDocument(event) {
    setDocument(event.target.value);
  }

  function onChangeRecord(event) {
    setRecord(event.target.value);
  }
  function onsubmit(e) {
    e.preventDefault();
        let body = {
          controlItem: controlItem,
            content: content,
            operation: operation,
            status: status,
            document: document,
            record: record
        }
        let content2 = JSON.stringify(body)
        let body2 = {
            writer: user.userData._id,
            content: content2,
            action: "??????????????? ??????",
        }
        axios.post(`/api/receipt/upload`,body)
        .then((response) => {
          if (response.data.success) {
            axios.post(`/api/log/saveLog`,body2)
                    .then((response) => {
                      if (response.data.success) {
                      } else {
                      }
                    });
            alert("????????? ?????????????????????.")
            setTimeout(() => {
              navigate('/page/AssetManagement/list')
            }, 1000);
          } else {
            alert("?????? ?????? ??????");
          }
        });

  }

  return (
    <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <BoxTitle>??????????????? ??????</BoxTitle>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>??????</InputLabel>
          <Input 
            type={"input"}
            placeholder="????????? ??????????????????."
            onChange={onChangeIndex}
            value={index}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeControlItem}
            value={controlItem}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeContent}
            value={content}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeOperation}
            value={operation}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeStatus}
            value={status}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeDocument}
            value={document}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>??????</InputLabel>
          <Input 
            type={"input"}
            placeholder="????????? ??????????????????."
            onChange={onChangeRecord}
            value={record}
            />
          </InputWrapper>  
          </RegisterInputWrapper>
          </Wrapper>
          <InBoxWrapper>
          <Button onClick={onsubmit}>????????????</Button>
          </InBoxWrapper>
        </BoxWrapper>
  )
}

export default ReceiptWirte