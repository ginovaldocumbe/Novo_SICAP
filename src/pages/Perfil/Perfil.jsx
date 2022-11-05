import { Checkbox, FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";
import React from "react";
import Baixo from "../../components/Baixo/baixo";
import NavBar from "../../components/NavBar/NavBar";


export default function Perfil() {
  const [checked, setChecked] = React.useState(false);

  function mudarCheck() {
    setChecked(!checked)
  }

  return (
    <div className="h-screen  pt-16   md:pt-0">
      <NavBar />
      <div className="flex flex-col items-center px-3 h-screen md:pt-2 md:mt-16">
        <div className="flex flex-row gap-12 items-center md:gap-3 md:w-80 md:-mb-10">
          <div className=" md:w-fit ">
            {/* <TextField className="w-full md:w-80" id="standard-basic" type='file' label="Foto" variant="standard" /> */}
            <div className='h-28 w-28 rounded-full border-dashed border-2 border-teal-600 flex items-center justify-center '>
              <span className='text-[14px] text-teal-600'>Fotografia</span>
            </div>
          </div>
          <div className="flex flex-col md:nowrap">
            <span className="font-bold text-xl">Wellington Macie</span>
            <span className=" text-base italic">wen@gmail.com</span>
          </div>
        </div>
        <form className='flex flex-col items-center justify-center pb-12 md:p-0 md:mb-8   pt-5 md:!-pt-12'>
          <div className="flex px-3 w-full mb-3 flex-col md:flex-row md:gap-8 md:w-96">
            <div>
              <span>Notificações</span>
              <Switch
                checked={checked}
                onClick={mudarCheck} />
            </div>
            {checked &&
              <FormGroup row>
                <FormControlLabel control={<Checkbox defaultChecked />} label="E-mail" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="SMS" />
              </FormGroup>}
          </div>
          <div className=" w-full md:grid md:grid-cols-2 md:w-[80%]">
            <div>
              <div className="flex items-center justify-center px-3 w-full mb-3">
                <TextField className='w-full' id="standard-basic" type='text' label="Apelido" defaultValue='Macie' variant="standard" />
              </div>
              <div className="flex items-center justify-center px-3 w-full mb-3">
                <TextField className='w-full' id="standard-basic" type='text' label="Nomes" defaultValue='Wellington' variant="standard" />
              </div>
              <div className="flex items-center justify-center px-3 w-full mb-3">
                <TextField className='w-full' id="standard-basic" type='email' label="Email" defaultValue='wen@gmail.com' variant="standard" />
              </div>
              <div className="flex items-center justify-center px-3 w-full mb-3">
                <TextField className='w-full' id="standard-basic" type='number' label="Contacto" defaultValue='845029681' variant="standard" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center px-3 w-full mb-3">
                <TextField className='w-full' id="standard-basic" type='text' label="Morada" defaultValue='Nkobe Q.19 C.460' variant="standard" />
              </div>
              <div className="flex items-center justify-center px-3 w-full mb-3">
                <TextField className='w-full' id="standard-basic" type='password' label="Senha Antiga" variant="standard" />
              </div>
              <div className="flex items-center justify-center px-3 w-full mb-3">
                <TextField className='w-full' id="standard-basic" type='password' label="Nova Senha" variant="standard" />
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center mt-5 gap-5 '>
            <button className='p-2 bg-sky-800 text-white rounded-lg w-36'>Gravar</button>
            <button className='p-2 border border-red-500 text-red-500 rounded-lg w-36'>Sair</button>
          </div>
        </form>
      </div>
      <Baixo />
    </div>
  )
}
