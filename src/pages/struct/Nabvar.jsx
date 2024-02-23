import {Link } from "react-router-dom";
import React from "react";
import Login from "../accounts/Login";
export default function Nabvar({ Logear}) {
  const Nombre = localStorage.getItem("username");
  return (
    <div className="border-2 h-[10%]">
      <img
        className="h-14 w-auto flex justify-start mx-4 mt-2"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Logo"
      />
      <div className="flex justify-end gap-10 text-xl -my-11 mr-3">
        <Link>Sabe</Link>
        <Link>dios</Link>
        <Link to={"/login"}>{Logear?"Hola " + Nombre: "Login"}</Link>
      </div>
    </div>
  );
}
