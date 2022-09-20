import React, { useEffect, useState } from "react";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import axios from "axios";
import moment from "moment";


const BoxWrapper = styled.div`
 flex: 1 0 0%;
 max-width: 1000px;
 width: 100%;
 margin: ${(props) => (props.isMobile ? "0 auto" : "20px auto")};
 position: relative;
 `;
 
 const InputWrapper = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-around;
 `;
 
 const InBoxWrapper = styled.div`
 display:flex;
 width: 100%;
justify-content: space-around;
background-color: #f5f5f7;

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
  word-break: keep-all;
  
  overflow: auto;
`;
const StyledTableCellValue = styled.div`
display: flex;
width: 100%;
height: 200px;
align-items: center;
flex: 0 0 4.8rem;

word-break: keep-all;
overflow: auto;
font-size: 6px;
`;
const StyledTableCellOperateValue = styled.div`
display: flex;
width:10%;
align-items: center;
justify-content: center;
flex: 0 0 4.8rem;
`;

const TableInCell = styled.td`
  display: flex;
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

  return (
    <>
      <DocumentManagementLayout>
      <Table>
        <Title></Title>
        </Table>
        <StyledTableRow>
          <InBoxWrapper>
            <StyledTableCellOperateValue>번호</StyledTableCellOperateValue>
            <StyledTableCellTitle>통제항목</StyledTableCellTitle>
            <StyledTableCellTitle>상세내용</StyledTableCellTitle>
            <StyledTableCellOperateValue>운영여부</StyledTableCellOperateValue>
            <StyledTableCellTitle>운영현황 (또는 미선택사유)</StyledTableCellTitle>
            <StyledTableCellTitle>관련문서 (정책,지침 등 세부조항번호까지)</StyledTableCellTitle>
            <StyledTableCellTitle>기록 (증적자료)</StyledTableCellTitle>
          </InBoxWrapper>
        </StyledTableRow>
        {receipts.map((receipt, idx) => {
              return (
                <>
                  <StyledTableRow key={document._id}>
                    <InputWrapper>
                      <StyledTableCellOperateValue>{idx}</StyledTableCellOperateValue>
                      <StyledTableCellValue>{receipt.controlItem}</StyledTableCellValue>
                      <StyledTableCellValue>{receipt.content}</StyledTableCellValue>
                      <StyledTableCellOperateValue>{receipt.operation}</StyledTableCellOperateValue>
                      <StyledTableCellValue>{receipt.status}</StyledTableCellValue>
                      <StyledTableCellValue>{receipt.status}</StyledTableCellValue>
                      <StyledTableCellValue>{receipt.status}</StyledTableCellValue>
                    </InputWrapper>
                  </StyledTableRow>
                </>
              );
            })}
        
      </DocumentManagementLayout>
    </>
  );
};
export default Receipt;
