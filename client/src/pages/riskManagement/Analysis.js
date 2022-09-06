import React from "react";
import RiskManagementLayout from "../../templates/RiskManagementLayout";
import styled from "styled-components";

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
  text-align: start;
  background-color: #f5f5f7;
  padding: 1rem 2.56rem;
`;

const Analysis = () => {
  return (
    <>
    <RiskManagementLayout>
      <Table>
      <Title>위협분석</Title>
      </Table>
      <StyledTableRow>
        <TableCell>
          <StyledTableCellTitle>위협코드</StyledTableCellTitle>
          <StyledTableCellTitle>대분류</StyledTableCellTitle>
          <StyledTableCellTitle>중분류</StyledTableCellTitle>
          <StyledTableCellTitle>위협내용</StyledTableCellTitle>
          <StyledTableCellTitle>기밀성</StyledTableCellTitle>
          <StyledTableCellTitle>무결성</StyledTableCellTitle>
          <StyledTableCellTitle>가용성</StyledTableCellTitle>
          <StyledTableCellTitle>위협등급</StyledTableCellTitle>

        </TableCell>

      </StyledTableRow>
    </RiskManagementLayout>
  </>
  );
};

export default Analysis;
