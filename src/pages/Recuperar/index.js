import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Recuperar() {
  return (
    <Container>
      <header className="main-header">
        <h1>projeto bimestral - joao vitor</h1>
      </header>

      <section>
        <h2>RECUPERAR SENHA</h2>

        <div className="container">
          <form>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="Ex.: nome@email.com" />

            <button type="button">ENVIAR</button>
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
