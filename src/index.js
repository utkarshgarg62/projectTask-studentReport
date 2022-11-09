import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Report from "./components/Report"
import Main from "./components/main"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />}></Route>

          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="reports" element={<Report />}></Route>
          {/* <Route path="login" element={<AuthorLogin />}></Route>
          <Route path="new-account" element={<NewAccount />}></Route>
          <Route path="new-book" element={<CreateBooks />}></Route>
          <Route path="bookslist" element={<BooksList />}></Route>
          <Route path="books/:id" element={<ViewBook />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);