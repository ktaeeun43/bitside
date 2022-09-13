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
  text-align: start;
  background-color: #f5f5f7;
  padding: 1rem 2.56rem;
`;
const StyledTableCellValue = styled.div`
display: flex;
align-items: center;
flex: 0 0 4.8rem;
padding: 1rem 1.86rem;
word-break: keep-all;
`;

const TableInCell = styled.td`
  display: flex;
`;

const Analysis = () => {
  const [analysis, setAnalsys] = useState([]);
  useEffect(() => {
    axios.get("/api/riskAnalsys/getRiskAnalsys").then((response) => {
      if (response.data.success) {
        setAnalsys(response.data.riskAnalsys);
      } else {
        alert("분석 가져오기 실패!");
      }
    });
  }, []);
  console.log(analysis,"분석")
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
        {analysis.map((analy, idx) => {
            let createdAt =  moment(analy.createdAt).format("YYYY-MM-DD")
              return (
                <>
                  <StyledTableRow key={analy._id}>
                    <TableInCell>
                      <StyledTableCellValue>{idx}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.majortype}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.minortype}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.riskcontent}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.confidentiality}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.availability}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.integrity}</StyledTableCellValue>
                      <StyledTableCellValue>{analy.risklevel}</StyledTableCellValue>
                    </TableInCell>
                  </StyledTableRow>
                </>
              );
            })}
    </RiskManagementLayout>
  </>
  );
};

export default Analysis;
