import React from 'react';
import styles from './login.module.css';
import Baixo from '../../components/Baixo/baixo'
import Topo from '../../components/Top_login/top_login'
import Card from '../../components/Card_login/card'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className={styles.Login}>
      <Topo />
      <Card />
      <Baixo />
    </div>
  );
}

export default Login;
