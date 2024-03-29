import { Link } from "react-router-dom";
import React from "react";
import Login from "../accounts/Login";
import LogoFlowbite from "../../assets/logo-flowbite.svg";
export default function Nabvar({ Logear }) {
  const Nombre = localStorage.getItem("username");
  return (
    <div className="border-2 h-[10%]">
      <img
        className="h-14 w-auto flex justify-start mx-4 mt-2"
        src={LogoFlowbite}
        alt="Logo"
      />
      <div className="flex justify-end gap-10 text-xl -my-11 mr-3">
        <Link to="/">Inicio</Link>
        <Link to="/Btrabajo">Bolsa de trabajo</Link>
        <Link to="/Actividad">Actividad</Link>
        <Link to="/Productos">Productos</Link>

        {Logear ? <p>{"Hola " + Nombre}</p> : <Link to={"/login"}>Login</Link>}
      </div>
    </div>
  );
}
