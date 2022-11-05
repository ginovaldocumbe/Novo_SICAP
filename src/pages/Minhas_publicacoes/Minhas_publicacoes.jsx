import React, { useState } from "react";
import Baixo from "../../components/Baixo/baixo";
import CardPub from "../../components/CardMinhasPub/CardPub";
import NavBar from "../../components/NavBar/NavBar";
import PubFiltro from "../../components/PubFiltro/PubFiltro";
import FtLap from './../../images/lap.jpg'

export default function Minhas_publicacoes() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" pb-12 md:pb-10">
      <NavBar />
      <div>
        <PubFiltro />
        <div className="flex flex-col items-center gap-3 md:grid md:grid-cols-4">
          <CardPub
            foto={FtLap}
            setOpen={setOpen}
            open={open} />
          <CardPub
            foto={FtLap}
            setOpen={setOpen}
            open={open} />
          <CardPub
            foto={FtLap}
            setOpen={setOpen}
            open={open} />
        </div>
      </div>
      <Baixo />
    </div>
  );
}
