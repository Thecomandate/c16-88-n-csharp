import React from "react";
import LogoFlowbite from "../../assets/logo-flowbite.svg";

export default function SignUp({ setStep }) {
  return (
    <div className="bg-gray-50">
      <div className="container  flex flex-col mx-auto justify-between w-screen h-screen gap-4 lg:gap-10 p-4 lg:p-10">
        <header>
          <nav
            className="container bg-white mx-auto flex max-w-7xl items-center justify-between py-6 px-8"
            aria-label="Global"
          >
            <div>
              <a
                href="/"
                className="container flex flex-row place-items-center gap-4"
              >
                <img className="h-8 w-auto" src={LogoFlowbite} alt="" />
                <span>
                  <h1 className="text-black text-2xl">Flowbite</h1>
                </span>
              </a>
            </div>
          </nav>
        </header>
        <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-center  mx-auto max-w-7xl flex-1">
          <div className="hidden md:flex flex-col p-10 gap-4">
            <h2 className="text-5xl">
              Todos tus proyectos, <br /> <strong>en un solo lugar</strong>
            </h2>
            <p className="text-2xl">
              Conéctate con profesionales de IT, muestra tu experiencia laboral,
              proyectos personales y repositorios de Git.
            </p>
            <p className="text-2xl">
              Comienza a colaborar y compartir conocimientos en nuestra
              comunidad.
            </p>
          </div>
          <div className="flex min-h-full flex-col w-full justify-start lg:justify-center align-middle">
            <div className="mt-10 sm:mx-auto w-full h-full max-w-sm mx-auto">
              <form className="space-y-4" action="#" method="POST">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Usuario
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      placeholder="johndoe1"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="johndoe@gmail.com"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contraseña
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Registrarse
                  </button>
                </div>
                <div className="text-sm text-center mt-2">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="flex w-full justify-center align-middle rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex-col sm:flex-row text-center">
                  <span className="text-black mr-3">
                    ¿Ya tienes una cuenta?
                  </span>
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Inicia sesión
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
