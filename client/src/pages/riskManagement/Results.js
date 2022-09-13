import React, { useEffect, useState } from "react";
import RiskManagementLayout from "../../templates/RiskManagementLayout";
import styled from "styled-components";
import axios from "axios";

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
  padding: 1.1rem 1rem;
  word-break: keep-all;
  
`;

const Results = () => {
  const [result, setResults] = useState([]);
  useEffect(() => {
    axios.get("/api/riskEstimation/getRiskEstimation").then((response) => {
      if (response.data.success) {
        setResults(response.data.riskEstimation);
      } else {
        alert("분석 가져오기 실패!");
      }
    });
  }, []);
  console.log(result,"분석")
  return (
    <>
    <RiskManagementLayout>
      <Table>
        <Title>위험평가 결과</Title>
        </Table>
        <StyledTableRow>
          <TableCell>
            <StyledTableCellTitle>자산그룹</StyledTableCellTitle>
            <StyledTableCellTitle>자산 등급</StyledTableCellTitle>
            <StyledTableCellTitle>점겅항목</StyledTableCellTitle>
            <StyledTableCellTitle>항목명</StyledTableCellTitle>
            <StyledTableCellTitle>취약성등급</StyledTableCellTitle>
            <StyledTableCellTitle>위협 코드</StyledTableCellTitle>
            <StyledTableCellTitle>위협내용</StyledTableCellTitle>
            <StyledTableCellTitle>위협등급</StyledTableCellTitle>
            <StyledTableCellTitle>위협내용</StyledTableCellTitle>
            <StyledTableCellTitle>위험도</StyledTableCellTitle>
          </TableCell>
        </StyledTableRow>
    </RiskManagementLayout>
    </>
  );
};
export default Results;
