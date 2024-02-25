import { Route,Routes, useLocation }  from "react-router-dom";
import Actividad from "./nabvar-struct/Actividad";
import Btrabajo from "./nabvar-struct/Btrabajo";
import Productos from "./nabvar-struct/Productos";
function Home({ Logear }) {
  const Nombre = localStorage.getItem("username");
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex  w-screen h-[90%] bg-[#ffffff]">
      {/*Perfil de usuario*/}
      <div className="border-2 w-[10%] h-full flex flex-col gap-5">
        <span className="flex items-center cursor-pointer">
          <img
            className="h-10 w-auto flex justify-start mx-2 mt-2 rounded-full"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
          />
          <p className="text-black">{Logear ? " " + Nombre : "UserName"}</p>
        </span>
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
        <Route path="/Btrabajo" element={<Btrabajo/>} />
        <Route path="/Actividad" element={<Actividad/>} />
        <Route path="/Productos" element={<Productos/>} />
      </Routes>
      
      {location.pathname === "/" && <div className="w-[90%] h-full">
        <div className="grid grid-cols-4 justify-between gap-2 h-[90%] mt-3 ml-3 mr-3">
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
        </div>
      </div>}
    </div>
  );
}

export default Home;
