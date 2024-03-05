import { Route, Routes, useLocation } from "react-router-dom";
import Actividad from "./nabvar-struct/Actividad";
import Btrabajo from "./nabvar-struct/Btrabajo";
import Productos from "./nabvar-struct/Productos";
import LogoFlowbite from "../assets/logo-flowbite.svg";
import { GrHelp } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { useState } from "react";
import Configuracion from "./user-struct/Configuracion";
import Ayuda from "./user-struct/Ayuda";
import Soporte from "./user-struct/Soporte";
import Contacto from "./user-struct/Contacto";
import { Link } from "react-router-dom";

function Home({ Logear }) {
  const [mostrarTextoCong, setMostrarTextoCong] = useState(false);
  const [mostrarTextoSup, setMostrarTextoSup] = useState(false);
  const [mostrarTextoHelp, setMostrarTextoHelp] = useState(false);
  const [mostrarTextoContact, setMostrarTextoContact] = useState(false);
  const [mostrarTextoLogout, setMostrarTextoLogout] = useState(false);
  const Nombre = localStorage.getItem("username");
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex w-full min-h-full bg-[#ffffff]">
      {/*Perfil de usuario*/}
      <div className="w-[5%]"></div>
      <div className="w-[5%] top-0 bottom-0 fixed justify-center items-center flex flex-col gap-8">
        <img
          className="h-10 w-auto flex justify-start mx-2 mt-2 rounded-full"
          src={LogoFlowbite}
          alt="Logo"
        />
        <Link to="/Configuracion">
        <div className="cursor-pointer" onMouseEnter={() => setMostrarTextoCong(true)} onMouseLeave={() => setMostrarTextoCong(false)}>
        <HiOutlineCog6Tooth className="text-2xl"/>
        <p className={`text-xs absolute rounded-lg p-1 bg-black text-white ${mostrarTextoCong ? 'opacity-100 animate-cloudIn' : 'opacity-0'}`}>Configuracion</p>
        </div>
        </Link>

        <Link to="/Soporte">
        <div className="cursor-pointer" onMouseEnter={() => setMostrarTextoSup(true)} onMouseLeave={() => setMostrarTextoSup(false)}>
        <BiSupport className="text-2xl"/>
        <p className={`text-xs absolute rounded-lg p-1 bg-black text-white ${mostrarTextoSup ? 'opacity-100 animate-cloudIn' : 'opacity-0'}`}>Soporte</p>
        </div>
        </Link>

        <Link to="/Ayuda">
        <div className="cursor-pointer" onMouseEnter={() => setMostrarTextoHelp(true)} onMouseLeave={() => setMostrarTextoHelp(false)}>
        <GrHelp className="text-2xl" />
        <p className={`text-xs absolute rounded-lg p-1 bg-black text-white ${mostrarTextoHelp ? 'opacity-100 animate-cloudIn' : 'opacity-0'}`}>Ayuda</p>
        </div>
        </Link>

        <Link to="/Contacto">  
        <div className="cursor-pointer" onMouseEnter={() => setMostrarTextoContact(true)} onMouseLeave={() => setMostrarTextoContact(false)}>
        <IoIosContact className="text-2xl" />
        <p className={`text-xs absolute rounded-lg p-1 bg-black text-white ${mostrarTextoContact ? 'opacity-100 animate-cloudIn' : 'opacity-0'}`}>Contacto</p>
        </div>
        </Link>

        <div className="cursor-pointer" onMouseEnter={() => setMostrarTextoLogout(true)} onMouseLeave={() =>setMostrarTextoLogout(false)}>
        {Logear && (
          <CiLogout onClick={() => {
            localStorage.removeItem("isLogged");
            window.location.href = "/";
          }} className="cursor-pointer text-2xl" />
          
        )}
        <p className={`text-xs absolute rounded-lg p-1 bg-black text-white ${mostrarTextoLogout ? 'opacity-100 animate-cloudIn' : 'opacity-0'}`}>Cerrar sesion</p>
        </div>
      </div>
      {/*Contenido*/}
      <Routes>
        <Route path="/Btrabajo" element={<Btrabajo />} />
        <Route path="/Actividad" element={<Actividad />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Configuracion/*" element={<Configuracion/>} />
        <Route path="/Ayuda" element={<Ayuda />} />
        <Route path="/Soporte" element={<Soporte />} />
        <Route path="/Contacto" element={<Contacto />} />
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
