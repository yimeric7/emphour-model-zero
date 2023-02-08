import React from "react";
import "./App.css";
import Home from './pages/Home'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import { Route, Routes } from "react-router";
import { AuthProvider } from "./backend/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
