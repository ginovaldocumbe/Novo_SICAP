import React, { useState } from "react";
import Baixo from "../../components/Baixo/baixo";
import CardPub from "../../components/CardPub/CardPub";
import NavBar from "../../components/NavBar/NavBar";
import PubFiltro from "../../components/PubFiltro/PubFiltro";
import FtCelular from './../../images/iphone.jpg'

export default function Minhas_publicacoes() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" pb-12 md:pb-10">
      <NavBar />
      <div>
        <PubFiltro />
        My
        <div className="flex flex-col items-center gap-3 md:grid md:grid-cols-4">
          <CardPub
            foto={FtCelular}
            setOpen={setOpen}
            open={open} />
          <CardPub
            foto={FtCelular}
            setOpen={setOpen}
            open={open} />
          <CardPub
            foto={FtCelular}
            setOpen={setOpen}
            open={open} />
        </div>
      </div>
      <Baixo />
    </div>
  );
}
