import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import AdminLogin from "./components/AdminLogin"
import RegisterPage from "./components/RegisterPage"
import StudentReport from "./components/StudentReport"
import Report from "./components/Report"
import Main from "./components/main"
import Edit from "./components/edit"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />}></Route>

          <Route path="adminlogin" element={<AdminLogin />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="reports" element={<Report />}></Route>
          <Route path="studentreport" element={<StudentReport />}></Route>
          <Route path="edit" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);