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
  padding: 0.5rem 2.46rem;
  word-break: keep-all;
`;


const DocumentTraces = () => {
  return (
    <>
      <DocumentManagementLayout>
      <Table>
        <Title>증적 목록</Title>
        </Table>
        <StyledTableRow>
          <TableCell>
            <StyledTableCellTitle>No</StyledTableCellTitle>
            <StyledTableCellTitle>영역구분</StyledTableCellTitle>
            <StyledTableCellTitle>증적코드</StyledTableCellTitle>
            <StyledTableCellTitle>증적명</StyledTableCellTitle>
            <StyledTableCellTitle>이행주기</StyledTableCellTitle>
            <StyledTableCellTitle>담당자</StyledTableCellTitle>
            <StyledTableCellTitle>최근 업로드</StyledTableCellTitle>
          </TableCell>
        </StyledTableRow>
      </DocumentManagementLayout>
    </>
  );
};
export default DocumentTraces;
