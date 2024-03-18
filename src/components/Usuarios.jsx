"use client";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Usuarios = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  let users = [
    {
      "username": "user1",
      "email": "user1@example.com",
      "info": "Info del usuario 1"
    },
    {
      "username": "user2",
      "email": "user2@example.com",
      "info": "Info del usuario 2"
    },
    {
      "username": "user3",
      "email": "user3@example.com",
      "info": "Info del usuario 3"
    }
  ]
  

  function postUser() {
    //http to post user
  }

  function getUsers() {
    //http request to get users
  }

  let display = users.length > 0;

  function crearUsuario() {
    console.log("Crear usuario", { username, email, info });
  }

  return (
    <div className="grid place-items-center grid-cols-1 h-full w-full">
      <h1 className="text-2xl font-semibold mt-5 ">Usuarios</h1>
      <form className="py-4 px-4 grid grid-cols-1 place-content-center justify-center gap-y-3 gap-3 my-10 border rounded-xl shadow-xl ">
        <div className="place-self-center">
          <i className="bi bi-person-fill mr-2"></i>
          <input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-3 w-72 bg-black text-white rounded-xl h-8 transform transition-transform hover:scale-105"
          />
        </div>
        <div className="place-self-center">
          <i className="bi bi-envelope-fill mr-2"></i>
          <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-3 w-72 bg-black text-white rounded-xl h-8 transform transition-transform hover:scale-105"
          />
        </div>
        <div className="place-self-center">
          <i className="bi bi-info-circle-fill mr-2"></i>
          <input
            placeholder="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="pl-3 w-80 bg-black text-white rounded-xl h-8 transform transition-transform hover:scale-105"
          />
        </div>
        <button 
          onClick={crearUsuario}
          className="place-self-center w-28 mx-4 bg-green-700 rounded-xl h-8 transform transition-transform hover:scale-105 px-9 py-1 font-normal text-white"
        >
          Crear
        </button>
      </form>
      <div
        className={`grid grid-cols-1 place-items-center ${
          display ? "" : "hidden"
        }`}
      >
        <p>Lista de usuarios</p>
        <div className="bg-black rounded-2xl px-4 py-2">
          {users.map((user) => (
            <div className="flex justify-between gap-2 text-white">
              <div>{user.username}</div>
              <div>{user.email}</div>
              <div>{user.info}</div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
