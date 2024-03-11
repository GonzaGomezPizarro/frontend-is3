// components/Usuarios.js
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Usuarios = () => {
  return (
    <div className="grid place-items-center grid-cols-1 h-full w-full">
      <h1 className="text-2xl font-semibold mt-5 ">Usuarios</h1>
      <form className=" flex flex-wrap w-96 justify-center gap-y-3 gap-3 my-10 ">
        <div>
          <i className="bi bi-person-fill mx-2"></i>
          <input
            placeholder="username"
            className="pl-3 w-72 bg-black text-white rounded-xl h-8 transform transition-transform hover:scale-105"
          />
        </div>
        <div>
          <i class="bi bi-envelope-fill mr-2"></i>
          <input
            placeholder="email"
            className="pl-3 w-72 bg-black text-white rounded-xl h-8 transform transition-transform hover:scale-105"
          />
        </div>
        <div>
          <i className="bi bi-info-circle-fill mr-2"></i>
          <input
            placeholder="info"
            className="pl-3 w-80 bg-black text-white rounded-xl h-8 transform transition-transform hover:scale-105"
          />
        </div>
        <b className="w-28 ml-4 bg-green-700 rounded-xl h-8 transform transition-transform hover:scale-105 px-9 py-1 font-normal text-white">Crear</b>
      </form>
      <p>sofaoemo</p>
    </div>
  );
};

export default Usuarios;
