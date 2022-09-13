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
  padding: 1.1rem 1.38rem;
  word-break: keep-all;
  
`;

const SecurityPlan = () => {
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    axios.get("/api/protectionData/getProtectionData").then((response) => {
      if (response.data.success) {
        setPlan(response.data.protectionData);
      } else {
        alert("분석 가져오기 실패!");
      }
    });
  }, []);
  console.log(plan,"분석")
  return (
    <>
      <RiskManagementLayout>
      <Table>
        <Title>정보보호계획</Title>
        </Table>
        <StyledTableRow>
          <TableCell>
            <StyledTableCellTitle>통제영역</StyledTableCellTitle>
            <StyledTableCellTitle>점검항목</StyledTableCellTitle>
            <StyledTableCellTitle>위험내용</StyledTableCellTitle>
            <StyledTableCellTitle>위험도</StyledTableCellTitle>
            <StyledTableCellTitle>보호대책</StyledTableCellTitle>
            <StyledTableCellTitle>시급성</StyledTableCellTitle>
            <StyledTableCellTitle>구현비용</StyledTableCellTitle>
            <StyledTableCellTitle>구현 난이도</StyledTableCellTitle>
            <StyledTableCellTitle>우선순위</StyledTableCellTitle>
          </TableCell>
        </StyledTableRow>
      </RiskManagementLayout>
    </>
  );
};
export default SecurityPlan;
