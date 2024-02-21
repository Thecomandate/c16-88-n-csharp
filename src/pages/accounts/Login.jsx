import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MyContext from "../../lib/context";
import { useContext } from "react";

export default function Login() {
  const navigate = useNavigate();
  const email = "prueba@prueba";
  const passwords = "prueba";
  let userEmail = "";
  let password = "";
  const loginUser = (e) => {
    e.preventDefault();
    userEmail = document.getElementById("email").value;

    password = document.getElementById("password").value;

    if (email !== userEmail) {
      alert("Usuario no encontrado");
      return;
    }
    navigate("/");

    console.log(userEmail, password);
  };
  const usercontext = useContext(MyContext);
  const { setStep } = usercontext;

  // const handleEmail = (e) => {
  //   setUserEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <div className="flex items-center justify-center h-screen bg-[#8c85ac]">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login Prueba
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <button
                  onClick={() => setStep(1)}
                  className="font-semibold text-[#f5f5f9] hover:text-black"
                >
                  ¿Olvidó su Contraseña?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#464054] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#a19dbd] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ingresar
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-[#000000]">
          No es Miembro?{" "}
          <button
            onClick={() => setStep(2)}
            className="font-semibold leading-6 text-[#f5f5f9] hover:text-fuchsia-300"
          >
            Registrar Cuenta
          </button>
        </p>
      </div>
    </div>
  );
}
