import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import ValidarVeiculo from './components/ValidarVeiculo'
import SolicitarVaga from './components/SolicitarVaga'
import PerfilUser from './components/PerfilUser'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/perfil-user" component={PerfilUser} />
        <Route path="/solicitar-vaga" component={SolicitarVaga} />
        <Route path="/validar-entrada" component={ValidarVeiculo} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </ BrowserRouter>
  );
}

export default App;
