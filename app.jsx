import React, { useState } from "react";

export default function App() {
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

        {show === "login" && (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold" htmlFor="email-login">
                Email
              </label>
              <input
                id="email-login"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="exemplo@elite.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold" htmlFor="password-login">
                Senha
              </label>
              <input
                id="password-login"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="••••••"
              />
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-xl py-2 font-bold"
            >
              Entrar
            </button>
          </form>
        )}

        {show === "register" && (
          <form className="space-y-4">
            <div>
              <label
                className="block mb-1 font-semibold"
                htmlFor="email-register"
              >
                Email
              </label>
              <input
                id="email-register"
                name="email"
                type="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                className="block mb-1 font-semibold"
                htmlFor="password-register"
              >
                Senha
              </label>
              <input
                id="password-register"
                name="password"
                type="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="••••••"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Escolha seu plano</label>
              <select
                name="plano"
                value={registerData.plano}
                onChange={handleRegisterChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="bronze">Plano Bronze - R$49/mês</option>
                <option value="prata">Plano Prata - R$89/mês</option>
                <option value="ouro">Plano Ouro - R$149/mês</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-xl py-2 font-bold"
            >
              Cadastrar e Pagar
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
