import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../templates/AdminLayout";
import styled from "styled-components";


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
  background-color: #F5F5F7;
  padding: 1.2rem 1.6rem;
  width: 12rem;
  flex: 0 0 10rem;
  
`;

const StyledTableCellValue = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 1.2rem 1.6rem;
`;

const StyledTableRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  `;

const Table = styled.div`
display: table;
width: "100%";
`;


const AdminManagement = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        //기존의 landingPage에 있는 코드 재사용
        axios.get("/api/users/getUsers").then((response) => {
          if (response.data.success) {
            setUsers(response.data.users)
        } else {
            alert("유저 가져오기 실패!");
        }
    });
}, []);
    console.log(users,"사용자");
    return (
        <>
        <AdminLayout >
            <Table>            
                <h4>사용자 관리</h4>
            </Table>
            <StyledTableRow>
                <TableCell>
                <StyledTableCellTitle>
                    ID 
                </StyledTableCellTitle>             
                <StyledTableCellTitle>
                    이 름
                </StyledTableCellTitle>  
                <StyledTableCellTitle>
                    부 서
                </StyledTableCellTitle>
                <StyledTableCellTitle>
                    권 한
                </StyledTableCellTitle>
                </TableCell>
            </StyledTableRow>
            <TableCell>
            {users.map((user) =>{
                return (
                    <>
                    <StyledTableRow>

                    <StyledTableCellValue>{user.email}{user.name}{user.department}{user.role}</StyledTableCellValue><br/>
                    {/* <StyledTableCellValue>{user.name}</StyledTableCellValue><br/>
                    <StyledTableCellValue>{user.department}</StyledTableCellValue><br/>
                    <StyledTableCellValue>{user.role}</StyledTableCellValue><br/> */}
                    </StyledTableRow>
                    </>
                );
            })}
            </TableCell>
        </AdminLayout>
        </>
    )
};

export default AdminManagement;