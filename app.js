import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    plano: "bronze",
  });

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleRegisterChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const handleLogin = () => alert("Login simulado para: " + loginData.email);

  const handleRegister = () =>
    alert(
      `Cadastro simulado para: ${registerData.email} com plano ${registerData.plano}`
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-rose-700">EliteSugar 💎</h1>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <div className="mb-4 flex space-x-4">
          <button
            onClick={() => setShow("login")}
            className={`flex-1 py-2 rounded-xl ${
              show === "login"
                ? "bg-rose-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setShow("register")}
            className={`flex-1 py-2 rounded-xl ${
              show === "register"
                ? "bg-rose-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Cadastrar
          </button>
        </div>

        {show === "log
