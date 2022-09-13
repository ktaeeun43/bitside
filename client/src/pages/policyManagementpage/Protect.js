import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PolicyManagementLayout from "../../templates/PolicyManagementLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";

const Button = styled.div`

  width: 10%;
  height: 20%;
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
  margin-top: 20px;
`;

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
  console.log(user.userData.isAdmin,"자산")

  

    return (
    <>
      <Outlet />
      <PolicyManagementLayout>
        <h1>정보보호정책</h1>
        {assets.map((asset, idx) => {
              let asset_name2 = asset.filePath.split('policy')[1];
              let asset_name3 = asset_name2.split('.')[0];
              let asset_name = asset_name3.substr(1)
              return (
                <>
                 <StyledTableRow key={asset._id}>
                    <TableInCell>
                      <StyledTableCellValue>{idx}</StyledTableCellValue>
                      <StyledTableCellValue>{asset.title}</StyledTableCellValue>
                      <StyledTableCellValue>{asset.description}</StyledTableCellValue>
                      <StyledTableCellValue>{asset_name}</StyledTableCellValue>
                      {user.userData.isAdmin === true ? (
                        <Button><a href={`http://bitside.net:3000/${asset.filePath}`} style={{textDecoration: 'none', color: "white"}}>다운로드</a></Button>
                      ) : ( null
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
