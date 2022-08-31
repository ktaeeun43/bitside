import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../templates/AdminLayout";
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
            <h1>사용자 관리</h1>
            {users.map((user) =>{
                return (
                    <>
                    <h1>{user.email}</h1>
                    <h2>{user.name}</h2>
                    <h3>{user.department}</h3>
                    <h4>{user.role}</h4>
                    </>
                );
            })}
        </AdminLayout>
        </>
    )
};

export default AdminManagement;