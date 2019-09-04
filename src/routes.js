import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Entrar from "./pages/Login";
import Cadastrar from "./pages/Cadastro";
import Recuperar from "./pages/Recuperar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Entrar} />
      <Route path="/Cadastrar" component={Cadastrar} />
      <Route path="/Recuperar" component={Recuperar} />
    </BrowserRouter>
  );
}
