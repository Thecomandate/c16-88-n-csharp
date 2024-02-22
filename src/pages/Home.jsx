function Home() {
  return (
    <div className="flex bg-blue-600 w-screen h-[90%]">
      {/*Perfil de usuario*/}
      <div className="bg-amber-400 w-[20%] h-full flex flex-col gap-5">
        <button className="flex items-center border-2">
          <img
            className="h-10 w-auto flex justify-start mx-4 mt-2 rounded-full border-2"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
          />
          <p className="text-black">UserName</p>
        </button>
        <button className="text-black">Configuracion</button>
        <button className="text-black">Soporte</button>
        <button className="text-black">Ayuda</button>
        <button className="text-black">Contacto</button>
        <button className="text-black">Cerrar Sesion</button>
      </div>
      {/*Contenido*/}
      <div className="bg-red-300 w-[80%] h-full">
        <p>Contenido</p>
      </div>
    </div>
  );
}

export default Home;
