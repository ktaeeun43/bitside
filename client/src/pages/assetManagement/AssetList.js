import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AssetManagementLayout from "../../templates/AssetManagementLayout"; 
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
        <h1>자산목록</h1>
      </AssetManagementLayout>
    </>
  );
};

export default AssetList;
