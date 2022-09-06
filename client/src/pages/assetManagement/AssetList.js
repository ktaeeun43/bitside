import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AssetManagementLayout from "../../templates/AssetManagementLayout"; 
import styled from "styled-components";

const Table = styled.div`
  display: table;
  width: 100%;
`;
const BoxContainer = styled.div`
  flex: 1 0 0%;
  max-width: 1090px;
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
  padding: 1rem 1rem;
  word-break: keep-all;
`;


const AssetList = () => {
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    axios.get("/api/asset/getAsset").then((response) => {
      if (response.data.success) {
        setAssets(response.data.asset);
      } else {
        alert("유저 가져오기 실패!");
      }
    });
  }, []);
  console.log(assets,"자산")
  return (
    <>
      <AssetManagementLayout>
      <Table>
        <Title>자산목록</Title>
        </Table>
        <BoxContainer>

        <StyledTableRow>
          <TableCell>
            <StyledTableCellTitle>No</StyledTableCellTitle>
            <StyledTableCellTitle>상용</StyledTableCellTitle>
            <StyledTableCellTitle>구분</StyledTableCellTitle>
            <StyledTableCellTitle>자산코드</StyledTableCellTitle>
            <StyledTableCellTitle>Hostname</StyledTableCellTitle>
            <StyledTableCellTitle>Version</StyledTableCellTitle>
            <StyledTableCellTitle>IP Address</StyledTableCellTitle>
            <StyledTableCellTitle>용도</StyledTableCellTitle>
            <StyledTableCellTitle>위치</StyledTableCellTitle>
            <StyledTableCellTitle>담당자</StyledTableCellTitle>
            <StyledTableCellTitle>등급</StyledTableCellTitle>
            <StyledTableCellTitle>장애여부</StyledTableCellTitle>
            <StyledTableCellTitle>서비스</StyledTableCellTitle>
          </TableCell>
        </StyledTableRow>
        </BoxContainer>
      </AssetManagementLayout>
    </>
  );
};

export default AssetList;
