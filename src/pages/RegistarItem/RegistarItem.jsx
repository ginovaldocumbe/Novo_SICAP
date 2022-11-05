import React from "react";
import Baixo from "../../components/Baixo/baixo";
import NavBar from "../../components/NavBar/NavBar";
import RegistoItem from "../../components/RegistoItem/RegistoItem";

export default function RegistarItem() {
  return (
    <div className="h-screen pt-16">
      <NavBar />
      <div>
        <RegistoItem />
      </div>
      <Baixo />
    </div>
  )
}