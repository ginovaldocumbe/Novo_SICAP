import React, { useEffect, useState } from "react";
import Baixo from "../../components/Baixo/baixo";
import CardPub from "../../components/CardPub/CardPub";
import NavBar from "../../components/NavBar/NavBar";
import PubFiltro from "../../components/PubFiltro/PubFiltro";
import FtCelular from './../../images/iphone.jpg'
import { getPublicacoes } from './../../requests/Get/getPublicacoes'


function Todas_publicacoes() {

// Essa constante abaixo busca a funcao Get dentro do getPublicacoes
  const { Get } = getPublicacoes();
  const [publicacoes, setPublicacoes] = useState();
  const [open, setOpen] = useState(false);


  // Esse use state em baixo pega todos os dados da API e insere no publicacoes
  // sendo que ja esta nas publicacoes ja podes usar o MAP pra buscar os dados 
  useEffect(() => {
    (async () => {
      let response = await Get()
      setPublicacoes(response)
    })()

  }, [])



  return (
    <div className=" pb-12 md:pb-10">
      <NavBar />
      <div>
        <PubFiltro />
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
export default Todas_publicacoes;
