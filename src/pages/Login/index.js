import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Entrar() {
  return (
    <Container>
      <header className="main-header">
        <h1>projeto bimestral - joao vitor</h1>
      </header>

      <section>
        <h2>LOGIN</h2>
        <div className="container">
          <form>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="Ex.: nome@email.com" />

            <label htmlFor="pass">Password</label>
            <input id="pass" type="password" />

            <button id="btt" type="button">
              ENTRAR
            </button>
          </form>
        </div>

        <nav>
          <Link className="link" to="/Recuperar">
            <p>Recuperar Acesso</p>
          </Link>
          <Link className="link" to="/Cadastrar">
            <p>Cadastre-se</p>
          </Link>
        </nav>
      </section>
    </Container>
  );
}
