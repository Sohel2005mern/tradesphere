import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// GET TOKEN & USERNAME FROM URL
const params = new URLSearchParams(window.location.search);

const tokenFromURL = params.get("token");
const usernameFromURL = params.get("username");

if (tokenFromURL) {
  localStorage.setItem("token", tokenFromURL);
}

if (usernameFromURL) {
  localStorage.setItem("username", usernameFromURL);
}

// Clean URL (remove query params)
if (tokenFromURL || usernameFromURL) {
  window.history.replaceState({}, document.title, "/");
}

// CHECK TOKEN
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "http://localhost:3000/login";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
