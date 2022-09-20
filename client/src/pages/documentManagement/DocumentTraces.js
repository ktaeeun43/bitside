import React, { useEffect, useState } from "react";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import axios from "axios";
import moment from "moment";


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

const StyledTableRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f7;
`;
const StyledTableValueRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
const TableCell = styled.td`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-top: 1px solid #e9eaef;
  border-left: 1px solid #e9eaef;
  border-right: 1px solid #e9eaef;
  display: flex;
`;

const StyledTableCellTitle = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 4.8rem;
  word-break: keep-all;
  `;
  const StyledTableCellValue = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 100%;
  flex: 0 0 4.8rem;
`;
const StyledTableCellOperateValue = styled.div`
display: flex;
align-items: center;
flex: 0 0 4.8rem;
padding: 0.5rem 2.46rem;
  word-break: keep-all;
`;

const TableInCell = styled.td`
  display: flex;
`;


function DocumentTraces() {

  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    axios.get("/api/document/getDocument").then((response) => {
      if (response.data.success) {
        setDocuments(response.data.file);
      } else {
        alert("증적 가져오기 실패!");
      }
    });
  }, []);
  console.log(documents,"증적")
  return (
    <>
      <DocumentManagementLayout>
      <Table>
        <Title></Title>
        </Table>
        <StyledTableRow>
            <StyledTableCellTitle>No</StyledTableCellTitle>
            <StyledTableCellTitle>영역구분</StyledTableCellTitle>
            <StyledTableCellTitle>증적코드</StyledTableCellTitle>
            <StyledTableCellTitle>증적명</StyledTableCellTitle>
            <StyledTableCellTitle>이행주기</StyledTableCellTitle>
            <StyledTableCellTitle>담당자</StyledTableCellTitle>
            <StyledTableCellTitle>최근 업로드</StyledTableCellTitle>
        </StyledTableRow>
        {documents.map((document, idx) => {
            let createdAt =  moment(document.createdAt).format("YYYY-MM-DD")
              return (
                <>
                  <StyledTableValueRow key={document._id}>
                      <StyledTableCellValue>{idx+1}</StyledTableCellValue>
                      <StyledTableCellValue>{document.area}</StyledTableCellValue>
                      <StyledTableCellValue>ISMS-00-{idx}</StyledTableCellValue>
                      <StyledTableCellValue>{document.itemName}</StyledTableCellValue>
                      <StyledTableCellValue>{document.cycle}</StyledTableCellValue>
                      <StyledTableCellValue>{document.writer.name}</StyledTableCellValue>
                      <StyledTableCellValue>{createdAt}</StyledTableCellValue>
                  </StyledTableValueRow>
                </>
              );
            })}
      </DocumentManagementLayout>
    </>
  );
};
export default DocumentTraces;
