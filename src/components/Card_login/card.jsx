import React, { useState } from 'react';
import styles from './card.module.css';
import Img from './../../images/main.png'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { AllPosts } from './../../requests/Post/AllPosts'


export default function Card() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const win = window.sessionStorage;
  win.setItem("token", "")

  const { PostLogin } = AllPosts();

  const navigate = useNavigate();

  const Entrar = (e) => {
    e.preventDefault();
    (async () => {
      let response = await PostLogin(email, password)
      // console.log(response);
      if (response.message == "Credenciais incorretas") {
        swal("Erro!", "Email ou Password invalidos!", "error");
      } else {
        win.setItem("token", response.token)
        swal("Bem vindo!", "Bem  vindo ao SICAP ", "success")
          .then((value) => {
            navigate("/todas_publicacoes");
          });

      }
    })()
  }
  return (
    <section className='flex items-center md:grid grid-cols-[40%_60%] overflow-hidden w-full h-screen'>
      <div className={styles.Card}>
        <h1 className={styles.login}>Login</h1>
        <span className={styles.welcome}>Bem vindo ao SICAP</span>
        <form onSubmit={Entrar} className='flex flex-col items-center md:w-96'>
          <div className="flex items-center justify-center px-8 w-full mb-3">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className='w-full' id="standard-basic" type='email' label="Email" variant="standard" />
          </div>

          <div className="flex items-center justify-center px-8 w-full ">
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              className='w-full' id="standard-basic" type='password' label="Senha" variant="standard" />
          </div>
          <a className={styles.esqueci}>Esqueceu a senha?</a> <br />
          <div className='flex flex-col items-center justify-center mt-5 gap-5 md:flex-row'>
            <button type='submit' className='p-2 bg-sky-800 text-white rounded-lg w-60 md:w-36'>Entrar</button>
            <Link to='/registo'><button className='p-2 border border-sky-800 text-sky-800 rounded-lg w-60 md:w-36'>Registo</button></Link>
            {/* <Link to='/meus_detalhes'><BtnPrimaria funcao='Entrar'></BtnPrimaria></Link>
          <Link to='/registo'><BtnSecondaria funcao='Nova Conta' /></Link> */}
          </div>
        </form>
      </div>
      <div className='hidden md:block bg-blue-200 rounded-tl-full'>
        {/* <div className={styles.custom1}>
        <svg className={styles.custom2} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.custom3}></path>
        </svg>
      </div> */}
        <img className='h-full w-auto -mt-12 ml-12' src={Img} /></div>
    </section>
  );
}


