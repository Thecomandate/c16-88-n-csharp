import { Route, Routes, useLocation } from "react-router-dom";
import Actividad from "./nabvar-struct/Actividad";
import Btrabajo from "./nabvar-struct/Btrabajo";
import Productos from "./nabvar-struct/Productos";
import LogoFlowbite from "../assets/logo-flowbite.svg";
function Home({ Logear }) {
  const Nombre = localStorage.getItem("username");
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex w-full min-h-full bg-[#ffffff]">
      {/*Perfil de usuario*/}
      <div className="w-[10%]"></div>
      <div className="w-[10%] top-0 bottom-0 fixed justify-center items-center flex flex-col gap-5">
        <img
          className="h-10 w-auto flex justify-start mx-2 mt-2 rounded-full"
          src={LogoFlowbite}
          alt="Logo"
        />
        <p className="text-black">{Logear ? " " + Nombre : "UserName"}</p>
        <span className="text-black cursor-pointer ml-3">Configuracion</span>
        <span className="text-black cursor-pointer ml-3">Soporte</span>
        <span className="text-black cursor-pointer ml-3">Ayuda</span>
        <span className="text-black cursor-pointer ml-3">Contacto</span>
        {Logear && (
          <span
            onClick={() => {
              localStorage.removeItem("isLogged");
              window.location.href = "/";
            }}
            className="text-black cursor-pointer ml-3"
          >
            Cerrar Sesion
          </span>
        )}
      </div>
      {/*Contenido*/}
      <Routes>
        <Route path="/Btrabajo" element={<Btrabajo />} />
        <Route path="/Actividad" element={<Actividad />} />
        <Route path="/Productos" element={<Productos />} />
      </Routes>

      {location.pathname === "/" && (
        <div className="grid grid-cols-1 w-full p-4 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2">
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
          <div className="border border-black"></div>
        </div>
      )}
    </div>
  );
}

export default Home;
