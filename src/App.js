
import Login from './pages/login/login'
import Registo from './pages/registo/registo';
import TodasPub from './pages/todas_publicacoes/todas_publicacoes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistarItem from './pages/RegistarItem/RegistarItem';
import Minhas_publicacoes from './pages/Minhas_publicacoes/Minhas_publicacoes';
import Perfil from './pages/Perfil/Perfil';
import Chat from './pages/Chat/Chat';
import Mensagem from './pages/Mensagem/Mensagem';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registo' element={<Registo />} />
        <Route path='/todas_publicacoes' element={<TodasPub />} />
        <Route path='/registar' element={<RegistarItem />} />
        <Route path='/minhas_publicacoes' element={<Minhas_publicacoes />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/mensagens' element={<Chat />} />
        <Route path='/mensagem' element={<Mensagem />} />


        {/* <Route path='/admin' element={<SlideBar />}>
          <Route path='achados' element={<Achados />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
