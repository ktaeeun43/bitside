import React, { useEffect, useState } from "react";
import RiskManagementLayout from "../../templates/RiskManagementLayout";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";

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
const StyledTableCellValue = styled.div`
display: flex;
align-items: center;
flex: 0 0 4.8rem;
padding: 1.1rem 1.38rem;
word-break: keep-all;
`;

const TableInCell = styled.td`
  display: flex;
`;

const SecurityPlan = () => {
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    axios.get("/api/protectionData/getProtectionData").then((response) => {
      if (response.data.success) {
        setPlan(response.data.protectionData);
      } else {
        alert("계획 가져오기 실패!");
      }
    });
  }, []);
  console.log(plan,"계획")
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
        {plan.map((analy, idx) => {
            let createdAt =  moment(analy.createdAt).format("YYYY-MM-DD")
              return (
                <> 
                  <StyledTableRow key={analy._id}>
                    <TableInCell>
                      <StyledTableCellValue>{analy.controlarea}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.checkitem}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.riskcontent}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.riskdegree}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.protectplan}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.urgency}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.implementcost}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.implementlevel}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.priority}</StyledTableCellValue>
                    </TableInCell>
                  </StyledTableRow>
                </>
              );
            })}
      </RiskManagementLayout>
    </>
  );
};
export default SecurityPlan;
