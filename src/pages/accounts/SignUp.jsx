import React from "react";

export default function SignUp({ setStep }) {
  return(
  <div className="grid justify-center items-center h-screen bg-[#0d6f4b]">
    <div className="text-xl font-bold text-[#9eeac1] flex flex-col gap-3 p-4 relative">
      <p className="absolute right-4 -top-4">
        Atras
      </p>
    <h1 className="text-[#edfcf4] ">Registrate</h1>
    <label  htmlFor="">Ingresa tu Correo</label>
    <input className="border-2 text-black" type="text" />
    <label htmlFor="">Contraseña</label>
    <input className="border-2 text-black" type="text" />
    <button className=" bg-[#0d583d] mx-auto mt-4 px-2 py-2 border-2 rounded-lg w-32 hover:bg-[#77dead] hover:text-black">Registrar</button>
    </div>
  </div>
  );
}
