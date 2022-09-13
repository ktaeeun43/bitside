import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PolicyManagementLayout from "../../templates/PolicyManagementLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledTableCellValue = styled.div`
display: flex;
align-items: center;
flex: 0 0 4.8rem;
  padding: 1rem 1rem;
  word-break: keep-all;
`;

const StyledTableRow = styled.tr`
  display: flex;
`;
const TableInCell = styled.td`
  display: flex;
`;

const Protect = () => {
  const [assets, setAssets] = useState([]);
  const user = useSelector((state) => state.User);

  useEffect(() => {
    axios.get("/api/policy/getPolicy").then((response) => {
      if (response.data.success) {
        setAssets(response.data.file);
      } else {
        alert("자산 가져오기 실패!");
      }
    });
  }, []);
  console.log(assets,"자산")
  return (
    <>
      <Outlet />
      <PolicyManagementLayout>
        <h1>정보보호정책</h1>
        {assets.map((asset, idx) => {
              let asset_name = asset.filePath.split('policy')[1];
              return (
                <>
                 <StyledTableRow key={asset._id}>
                    <TableInCell>
                      <StyledTableCellValue>{idx}</StyledTableCellValue>
                      <StyledTableCellValue>{asset.title}</StyledTableCellValue>
                      <StyledTableCellValue>{asset.description}</StyledTableCellValue>
                      {user.isAdmin === true ? (
                      <StyledTableCellValue><a href={`http://bitside.net:3000/${asset.filePath}`}>{asset_name}</a></StyledTableCellValue>
                      ) : (
                        <StyledTableCellValue>{asset_name}</StyledTableCellValue>
                  )}
                    </TableInCell>
                  </StyledTableRow>
                </>
              );
            })}
      </PolicyManagementLayout>
    </>
  );
};

export default Protect;
