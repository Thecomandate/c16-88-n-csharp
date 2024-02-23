import { useState, useEffect } from "react";

function Home({ Logear }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Hacer una solicitud a la API cuando el componente se monta
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado con los datos de la API
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(user);

  return (
    <div className="flex  w-screen h-[90%]">
      {/*Perfil de usuario*/}
      <div className="bg-[#3798fa] w-[20%] h-full flex flex-col gap-5">
        <span className="flex items-center cursor-pointer">
          <img
            className="h-10 w-auto flex justify-start mx-4 mt-2 rounded-full"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
          />
          <p className="text-black">UserName</p>
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
      <div className="bg-red-300 w-[80%] h-full">
        <div>
          <h1>Lista de Usuarios</h1>
          <ul>
            {user.map((user) => (
              <li key={user.id}>{user.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
