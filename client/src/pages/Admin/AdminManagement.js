import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../templates/AdminLayout";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const TableCell = styled.td`
  display: flex;
  border-top: 1px solid #e9eaef;
  border-left: 1px solid #e9eaef;
  &:last-child {
    border-right: 1px solid #e9eaef;
  }
  border-right: 1px solid #e9eaef;
  display: flex;
  width: 100%;
`;
const StyledTableCellTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 12rem;
  text-align: start;
  background-color: #f5f5f7;
  padding: 1.2rem 1.6rem;
  width: 12rem;
  flex: 0 0 10rem;
`;

const StyledTableCellValue = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 12rem;
  padding: 1.1rem 1rem;
`;

const StyledTableRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledTableColumn = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Table = styled.div`
  display: table;
  width: "100%";
`;

const AdminManagement = () => {
  const [users, setUsers] = useState([]);
  const [id, setid] = useState('');
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  useEffect(() => {
    //기존의 landingPage에 있는 코드 재사용
    axios.get("/api/users/getUsers").then((response) => {
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        alert("유저 가져오기 실패!");
      }
    });
  }, []);
  const onDelete =(e) => {
    
    e.preventDefault();
    setid(e.target.value)
    let body ={
      id : e.target.value
    }
    axios.post("/api/users/delete", body).then((response) => {
      if (response.data.success) {
        alert("유저 삭제 성공!");
        navigate("/page/Admin")
      } else {
        alert("유저 삭제제 실패!");
      }
    });

  }


  return (
    <>
      <AdminLayout>
        <Table>
          <h4>사용자 관리</h4>
        </Table>
        <StyledTableRow>
          <TableCell>
            <StyledTableCellTitle>ID</StyledTableCellTitle>
            <StyledTableCellTitle>이 름</StyledTableCellTitle>
            <StyledTableCellTitle>부 서</StyledTableCellTitle>
            <StyledTableCellTitle>권 한</StyledTableCellTitle>
          </TableCell>
        </StyledTableRow>
        <TableCell>
          <StyledTableColumn>
            {users.map((user) => {
              return (
                <>
                  <StyledTableRow key={user._id}>
                    <TableCell>
                      <StyledTableCellValue>{user.email}</StyledTableCellValue>
                      <StyledTableCellValue>{user.name}</StyledTableCellValue>
                      <StyledTableCellValue>
                        {" "}
                        {user.department}
                      </StyledTableCellValue>
                      <StyledTableCellValue>{user.role}</StyledTableCellValue>
                      <Button variant="contained" value={user._id} onClick={onDelete}>삭제</Button>
                    </TableCell>
                  </StyledTableRow>
                </>
              );
            })}
          </StyledTableColumn>
        </TableCell>
      </AdminLayout>
    </>
  );
};

export default AdminManagement;
