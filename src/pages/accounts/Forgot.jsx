import React from "react";

export default function Forgot({setStep}) {
  return (
    <div className="grid justify-center items-center  h-screen bg-slate-500">
      <div className="grid gap-2 w-72">
        <h1 className="text-xl text-cyan-500">Recuperar Contraseña</h1>
        <label className="text-orange-400" htmlFor="email">
          Ingrese su Correo
        </label>
        <input className="border-2" type="text" />
        <label className="text-orange-400" htmlFor="contraseña">
          Ingrese su ultima contraseña
        </label>
        <input className="border-2" type="text" />
        
          <button onClick={()=>setStep(0)} className="border-2 ">Atras</button>
        
      </div>
    </div>
  );
}
