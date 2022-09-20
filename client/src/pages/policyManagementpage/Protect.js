import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PolicyManagementLayout from "../../templates/PolicyManagementLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";

const StyledTableCellValue = styled.div`
display: flex;
width: 30%;
align-items: center;
margin-left: 10px;
`;

const StyledTableCellContentValue = styled.div`
display: flex;
width: 80%;
justify-content: center;
background-color: #a0a0a0;
align-items: center;
padding:10px;
`;
const StyledTableCellButton = styled.div`
display: flex;
width: 30%;
margin-left: 10px;
justify-content: center;
align-items: center;
padding: 0.3rem 0.875rem;
color: ${COLOR_WHITE};
font-size: 0.875rem;
background-color: ${COLOR_ABLE_BUTTON};
cursor: pointer;
-webkit-box-align: center;
-webkit-box-pack: center;
border-radius: 8px;
`;

const StyledTableRow = styled.tr`
  display: flex;
  width: 100%;
  `;
  const TableInCell = styled.td`
  display: flex;
  width: 100%;
  margin: 20px;
  justify-content: space-around;
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
              let asset_file = asset.filePath.split('policy/')[1];
              let asset_name =  asset_file.split('.')[0].split("정책_")[1];
              return (
                <>
                 <StyledTableRow key={asset._id}>
                    <TableInCell>
                      <StyledTableCellValue>{asset.description}</StyledTableCellValue>
                      {user.userData.isAdmin === true ? (
                        <>
                      <StyledTableCellContentValue>{asset_name}
                      </StyledTableCellContentValue>
                      <StyledTableCellButton>
                      <a href={`http://bitside.net:3000/${asset.filePath}`} style={{textDecoration: "None",color: "white"}}>다운로드</a>
                      </StyledTableCellButton>
                        </>
                      ) : (
                        <StyledTableCellContentValue>{asset_name}</StyledTableCellContentValue>
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
