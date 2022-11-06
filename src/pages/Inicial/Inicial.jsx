import React from "react";
import { Link } from "react-router-dom";
import InicioCard from "../../components/InicioCard/InicioCard";
import Moon1 from './../../images/Moon.png'
import Moon2 from './../../images/Moon3.png'
import Giving from './../../images/giv.jpg'
import Phone from './../../images/phone.jpg'
import Lost from './../../images/lost.jpg'
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import Saudigitus from './../../images/sau.png'
import Vodacom from './../../images/Vodacom3.jpg'


export default function Inicial() {
  return (
    <div className="h-screen !overflow-x-hidden">
      <div className="abslute">
        <div className=" -ml-40 top-0  md:hidden backdrop-blur-xl !overflow-hidden">
          <img className="h-full w-full" src={Moon1} alt="" />
        </div>
        <div className="-ml-40 top-0 hidden md:block">
          <img className=" " src={Moon2} alt="" />
        </div>
      </div>
      <div className="h-[445px] relative top-0 -translate-y-full  w-full backdrop-blur-[2px] 
      bg-black/30 h-screen lg:h-[510px] xl:h-[530px] text-white 
      flex flex-col items-center justify-center">
        
        <span className="text-3xl font-bold mb-4">SICAP</span>
        <span className="text-center px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente maxime perferendis culpa excepturi similique sit labore
          quo, vitae, quod voluptate dolore minus placeat officiis dicta
          dolorem quaerat voluptatem tenetur laborum.</span>
        <Link to='/todas_publicacoes'><button className="text-white w-44 bg-sky-800 p-2 rounded-lg translate-y-7">Ver</button></Link>
        <div>BLa BLA</div>
      </div>
      <div className="grid grid-cols-2 gap-2 -mt-[500px] md:flex md:flex-row md:items-center md:justify-center md:-translate-y-12">
        <InicioCard
          foto={Giving}
          titulo='Achados' />
        <div className="md:order-last">
          <InicioCard
            foto={Lost}
            titulo='Perdidos' />
        </div>
        <div className='translate-x-24 md:translate-x-0  '>
          <InicioCard
            foto={Phone}
            titulo='Tudo isso pelo celular' />
        </div>

      </div>
      <div className="mt-5 md:flex md:flex-col md:items-center">
        <span className="font-bold uppercase ">Patrocinadores</span>
        <div className="flex flex-row gap-3 md:items-center md:justify-center">
          <InicioCard
            foto={Saudigitus}
          />
          <InicioCard
            foto={Vodacom} />
        </div>
      </div>
      <div className="mt-5 md:flex md:flex-col md:items-center">
        <span className="font-bold uppercase ">Contactos</span>
        <div className="flex flex-col px-4">
          <div className="flex flex-row gap-5">
            <span className="flex flex-row gap-1 items-center">
              <MdEmail /> E-mail</span>
            <span>sicap@gmail.com</span>
          </div>
          <div className="flex flex-row gap-5">
            <span className="flex flex-row gap-1 items-center">
              <BsFacebook /> Facebook</span>
            <span>SICAP_Oficial</span>
          </div>
          <div className="flex flex-row gap-5">
            <span className="flex flex-row gap-1 items-center">
              <AiFillInstagram /> Instagram</span>
            <span>SICAP_Oficial</span>
          </div>
        </div>
      </div>
    </div>
  );
}
