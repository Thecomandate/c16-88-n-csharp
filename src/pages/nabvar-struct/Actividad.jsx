import React from "react";

export default function Actividad() {

  const Arraydiv = Array(12).fill(null);
    return (
    <div className="grid grid-cols-1 overflow-x-hidden sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2 w-full p-4">
      {Arraydiv.map((div) => {
        return (
          <div className="border-2 border-black rounded-lg flex items-start justify-center flex-col gap-2 h-56 px-4">
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <h3 className="text-[#999999]">UserName</h3>
            <p className="">Aca va tus posteos diarios que realices</p>
            <h3 className="text-[#999999]">tiempo de publicacion</h3>
            <input
              placeholder="Respuesta directa"
              className="bg-[#eee6e6] w-48 rounded-lg px-2 py-2"
              type="text"
            />
          </div>
        ); 
        
      }
      )} 
    </div>
  );
}
