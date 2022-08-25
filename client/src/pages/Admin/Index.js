import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../../templates/AdminLayout'
import AdminManagement from './AdminManagement'
import AdminRegister from './AdminRegister'

function index() {
  return (
    <>
        <AdminLayout>
            <div>inde</div>
        </AdminLayout>
        <Routes>
            <Route path="/register" element={<AdminRegister/>} />
            <Route path="/userManagement" element={<AdminManagement/>} />
        </Routes>
    </>
  )
}

export default index