import React from "react";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";
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
  background-color: #f5f5f7;
  flex: 0 0 4.8rem;
  padding: 1rem 2.2rem;
  word-break: keep-all;
`;

const Receipt = () => {
  return (
    <>
      <DocumentManagementLayout>
      <Table>
        <Title>운영명세서</Title>
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
