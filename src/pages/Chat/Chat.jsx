import React from "react";
import Baixo from "../../components/Baixo/baixo";
import Mensagens from "../../components/Mensagens/Mensagens";
import NavBar from "../../components/NavBar/NavBar";


export default function Chat() {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col h-screen pt-24 px-1 md:px-5'>
        <span className="font-bold text-lg uppercase mb-8">Mensagens</span>
        <Mensagens />
        <Mensagens />
        <Mensagens />
      </div>
      <Baixo />
    </div>
  );
}
