import React from 'react';
import Topo from '../../components/Top_login/top_login'
import Baixo from '../../components/Baixo/baixo'
import TextField from '@mui/material/TextField';

const Registo = () => (
  <div className="h-full pt-24 ">
    <Topo />
    <div className='h-full px-2 flex flex-col md:items-center pb-12'>
      <h1 className='text-cyan-800 font-bold text-lg mb-5'>Registe-se no SICAP</h1>
      <form className='flex flex-col items-center justify-center md:w-96'>
        <div className="flex items-center justify-center px-3 w-full mb-3">
          <TextField className='w-full' id="standard-basic" type='text' label="Apelido" variant="standard" />
        </div>
        <div className="flex items-center justify-center px-3 w-full mb-3">
          <TextField className='w-full' id="standard-basic" type='text' label="Nomes" variant="standard" />
        </div>
        <div className="flex items-center justify-center px-3 w-full mb-3">
          <TextField className='w-full' id="standard-basic" type='email' label="Email" variant="standard" />
        </div>
        <div className="flex items-center justify-center px-3 w-full mb-3">
          <TextField className='w-full' id="standard-basic" type='number' label="Contacto" variant="standard" />
        </div>
        <div className="flex items-center justify-center px-3 w-full mb-3">
          <TextField className='w-full' id="standard-basic" type='text' label="Morada" variant="standard" />
        </div>
        <div className="flex items-center justify-center px-3 w-full mb-3">
          <TextField className='w-full' id="standard-basic" type='password' label="Senha" variant="standard" />
        </div>
        <div className="flex items-center justify-center px-3 w-full mb-3">
          <TextField className='w-full' id="standard-basic" type='password' label="Confirmar senha" variant="standard" />
        </div>
        <div className='flex flex-row items-center justify-center mt-5 gap-5 '>
          <button className='p-2 bg-sky-800 text-white rounded-lg w-36'>Entrar</button>
          <button className='p-2 border border-sky-800 text-sky-800 rounded-lg w-36'>Registo</button>
        </div>
      </form>
    </div>
    <Baixo />
  </div>
);

Registo.propTypes = {};

Registo.defaultProps = {};

export default Registo;
