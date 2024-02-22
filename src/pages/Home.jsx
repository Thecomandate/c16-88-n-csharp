function Home() {
  return (
    <div className="flex bg-blue-600 w-screen h-[90%]">
      {/*Perfil de usuario*/}
      <div className="bg-amber-400 w-[20%] h-full">
        <p className="text-black">Perfil</p>
      </div>
      {/*Contenido*/}
      <div className="bg-red-300 w-[80%] h-full">
        <p>Contenido</p>
    </div>
  </div>
  );
}

export default Home;
