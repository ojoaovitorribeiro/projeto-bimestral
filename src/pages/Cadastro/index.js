import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Cadastrar() {
  return (
    <Container>
      <header className="main-header">
        <h1>projeto bimestral - joao vitor</h1>
      </header>
      <section>
        <h2 className="h2">CADASTRO</h2>

        <div className="container">
          <form>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" placeholder="José Maria" />

            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="Ex.: nome@email.com" />

            <label htmlFor="pass">Password</label>
            <input id="pass" type="password" />

            <button type="button">CADASTRAR</button>
          </form>
        </div>
        <nav>
          <Link className="link" to="/">
            <p>Já tem acesso? Faça já seu Login</p>
          </Link>
        </nav>
      </section>
    </Container>
  );
}
