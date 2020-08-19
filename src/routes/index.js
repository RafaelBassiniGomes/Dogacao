import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Route from './Route';
import LogIn from '../pages/login';
import Registro from '../pages/registro';
import Profile from '../pages/Profile';

import Abrigos from '../pages/abrigos';
import AbrigoQuemSomos from '../pages/abrigos/quemSomos';
import AbrigoFaleConosco from '../pages/abrigos/faleConosco';
import AbrigoCadastro from '../pages/abrigos/abrigoNovo';
import AbrigoEdicao from '../pages/abrigos/abrigoForm';
import AbrigosCasos from '../pages/abrigos/casosAbrigos';
import AbrigosLoja from '../pages/abrigos/loja/index';
import AbrigosAdocao from '../pages/abrigos/adocaoList';
import AbrigosAdocaoForm from '../pages/abrigos/adocaoForm';
import AnimalIndex from '../pages/animais/index';
import Animais from '../pages/animais/perfil';
import AnimalAdocao from '../pages/animais/AdocaoForm';
import AnimalEdicao from '../pages/animais/animalForm';
import AnimalCadastro from '../pages/animais/animalNovo';

import NotFound from '~/pages/_layouts/notFound';
import Eventos from '~/pages/eventos/index';
import EventoPerfil from '~/pages/eventos/perfil';
import EventoNovo from '~/pages/eventos/eventoNovo';
import EventoLocalizacao from '~/pages/eventos/localizacao';
import EventoEdicao from '~/pages/eventos/eventoForm';
import Parceiros from '~/pages/Institucional/parceiros';
import QuemSomos from '~/pages/Institucional/quemSomos';
import FaleConosco from '~/pages/Institucional/faleConosco';
import PoliticaDePrivacidade from '~/pages/Institucional/politicaDePrivacidade';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);

export default function Routes() {
  return (
    <Scroll>
      <Switch>
        <Route path="/" exact component={Abrigos} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/Registro" exact component={Registro} />
        <Route path="/profile" exact component={Profile} isPrivate />
        <Route path="/QuemSomos" exact component={QuemSomos} />
        <Route path="/FaleConosco" exact component={FaleConosco} />
        <Route
          path="/PoliticaDePrivacidade"
          exact
          component={PoliticaDePrivacidade}
        />

        <Route path="/Parceiros" exact component={Parceiros} />
        <Route path="/Abrigos" exact component={Abrigos} />
        <Route path="/Abrigos/Novo" exact component={AbrigoCadastro} />

        <Route path="/Eventos" exact component={Eventos} />
        <Route path="/Eventos/Novo" exact component={EventoNovo} />
        <Route path="/Eventos/local/:id" exact component={EventoLocalizacao} />
        <Route path="/Eventos/:id/Editar" exact component={EventoEdicao} />
        <Route path="/Eventos/:id" exact component={EventoPerfil} />

        <Route path="/Casos" exact component={AnimalIndex} />
        <Route path="/Casos/Novo" exact component={AnimalCadastro} />
        <Route path="/Casos/Adocao/:id" exact component={AnimalAdocao} />
        <Route path="/Casos/:id/editar" exact component={AnimalEdicao} />
        <Route path="/Casos/:id" exact component={Animais} />
        <Route path="/404" component={NotFound} />
        <Route path="/:slug/QuemSomos" component={AbrigoQuemSomos} />
        <Route path="/:slug/faleconosco" component={AbrigoFaleConosco} />
        <Route path="/:slug/editar" component={AbrigoEdicao} />
        <Route path="/:slug/adocao" component={AbrigosCasos} />
        <Route path="/:slug/loja" component={AbrigosLoja} />
        <Route path="/:slug/loja/:id" component={AbrigosLoja} />
        <Route path="/:slug/formularios/:id" component={AbrigosAdocaoForm} />
        <Route path="/:slug/formularios" component={AbrigosAdocao} />
        <Route path="/:slug" component={AbrigoQuemSomos} />
      </Switch>
    </Scroll>
  );
}
