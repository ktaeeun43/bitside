import React, { useEffect, useState } from "react";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import axios from "axios";


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

const Receipt = () => {

  const [receipts, setReceipts] = useState([]);
  useEffect(() => {
    axios.get("/api/receipt/getReceipt").then((response) => {
      if (response.data.success) {
        setReceipts(response.data.receipt);
      } else {
        alert("명세서 가져오기 실패!");
      }
    });
  }, []);
  console.log(receipts,"명세서")

  return (
    <>
      <DocumentManagementLayout>
      <Table>
        <Title></Title>
        </Table>
        <StyledTableRow>
          <TableCell>
            <StyledTableCellTitle>번호</StyledTableCellTitle>
            <StyledTableCellTitle>통제항목</StyledTableCellTitle>
            <StyledTableCellTitle>상세내용</StyledTableCellTitle>
            <StyledTableCellTitle>운영여부</StyledTableCellTitle>
            <StyledTableCellTitle>운영현황 (또는 미선택사유)</StyledTableCellTitle>
            <StyledTableCellTitle>관련문서 (정책,지침 등 세부조항번호까지)</StyledTableCellTitle>
            <StyledTableCellTitle>기록 (증적자료)</StyledTableCellTitle>
          </TableCell>
        </StyledTableRow>
        
      </DocumentManagementLayout>
    </>
  );
};
export default Receipt;
