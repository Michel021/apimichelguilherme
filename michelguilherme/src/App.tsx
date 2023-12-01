// Importe as dependências necessárias
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

// Componentes React para representar o conteúdo
const Postagem: React.FC<{ titulo: string; data: string; imagem: string; conteudo: string }> = ({ titulo, data, imagem, conteudo }) => (
  <div className="postagem">
    <h2>{titulo}</h2>
    <span className="data-postagem">postado {data}</span>
    <p>{conteudo}</p>
    <a href="/">Leia mais</a>
  </div>
);
const PostagemLateral: React.FC<{ conteudo: string }> = ({ conteudo }) => (
  <div className="postagem-lateral">
    <p>{conteudo}</p>
    <a href="/">Leia mais</a>
  </div>
);

const AreaPrincipal: React.FC = () => (
  <div id="area-principal">
    <div id="area-postagens">
      <Postagem
        titulo="Titulo da postagem 1"
        data="20 março 2022"
        imagem=''
        conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula"
      />
      <Postagem
        titulo="Titulo da postagem 2"
        data="10 março 2022"
        imagem=''
        conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et scelerisque quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nulla turpis, gravida at nunc eu, luctus aliquam justo. Praesent eget risus vehicula"
      />
    </div>
    <div id="area-lateral">
      <div className="conteudo-lateral">
        <h3>Postagens recentes</h3>
        <PostagemLateral conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <PostagemLateral conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
      <div className="conteudo-lateral">
        <h3>Categorias</h3>
        <a href="/">Finanças</a><br />
        <a href="/">Segurança</a><br />
        <a href="/">Contabilidade</a><br />
        <a href="/">Contato</a><br />
      </div>
    </div>
  </div>
);

const Rodape: React.FC = () => (
  <div id="rodape">
    Todos os direitos reservados
  </div>
);

// Componente principal App
const App: React.FC = () => {
  const auth = React.useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="area-cabecalho">
      <header>
        <div id="area-logo">
          <h1>Ouro<span>Sábio</span></h1>
        </div>
        <div id="area-menu">
          <nav>
            <Link to="/">Home</Link>/
            <Link to="/private">Página Privada</Link>
            {auth.user && <button onClick={handleLogout}>Sair</button>}
          </nav>
        </div>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
      <AreaPrincipal />
      <Rodape />
    </div>
  );
}

export default App;
