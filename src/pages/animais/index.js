import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Select } from '@rocketseat/unform';
import Helmet from 'react-helmet';
import casoApi from '~/logicas/CasosApi';
import logo from '~/assets/abrigosemlogo.jpg';

import { Content, Body } from './styles';
import { calculaIdade } from '../../logicas/Funcoes';
import {
  ListaPorte,
  ListaSexo,
  getDcrPorte,
  getDcrSexo,
} from '~/components/PerfilAnimal';
import { ListaEstados } from '~/components/Estados/index';

const listaPorte = new ListaPorte();
const listaSexo = new ListaSexo();

const listaEstados = new ListaEstados();

function searchFor(porte, sexo, estado) {
  return function(x) {
    return (
      (x.porte === parseInt(porte) || !porte) &&
      (x.sexo === sexo || !sexo) &&
      (x.abrigo.estado === estado || !estado)
    );
  };
}
class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      casos: [],
      estado: '',
      porte: '',
      sexo: '',
    };

    this.searchPorte = this.searchPorte.bind(this);
    this.searchSexo = this.searchSexo.bind(this);
    this.searchEstado = this.searchEstado.bind(this);
  }

  componentDidMount() {
    casoApi.listaCasos().then(res => {
      this.setState({ casos: [...this.state.casos, ...res.data] });
    });
  }

  searchEstado(event) {
    this.setState({ estado: event.target.value });
  }

  searchPorte(event) {
    this.setState({ porte: event.target.value });
  }

  searchSexo(event) {
    this.setState({ sexo: event.target.value });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta property="og:title" content="DogAção" />
          <meta property="og:description" content="Venha fazer a sua DogAção" />
          <meta property="og:image" content="%PUBLIC_URL%/img/dogacao.webp" />
          <meta property="og:url" content="https://dogacao.org" />
        </Helmet>

        <div className="container corpo feed">
          <header className="filtro">
            <div className="row">
              <div className="col-md-12 col-lg-12 ">
                <div className="row">
                  <div className="col-md-2">
                    <Link to="/casos/Novo" className="btn btn-primary">
                      Cadastrar caso
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInput4">Porte</label>
                    <br />
                    <Select
                      name="porte"
                      options={listaPorte}
                      onChange={this.searchPorte}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="exampleInput4">Sexo</label>
                    <br />
                    <Select
                      name="sexo"
                      options={listaSexo}
                      onChange={this.searchSexo}
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="exampleInput4">Estado</label>
                    <br />
                    <Select
                      name="estado"
                      options={listaEstados}
                      onChange={this.searchEstado}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-lg-12">
                <hr />
              </div>
            </div>
          </header>
          <div className="row">
            <div className="col-md-12 col-lg-12 timeline">
              <div className="row">
                <div className="col-xs-12">
                  <ul>
                    {this.state.casos
                      .filter(
                        searchFor(
                          this.state.porte,
                          this.state.sexo,
                          this.state.estado
                        )
                      )
                      .map(caso => (
                        <div className=" col-lg-3">
                          <Content>
                            <Link to={`/casos/${caso.id}`}>
                              <img
                                src={caso.avatar ? caso.avatar.url_300 : logo}
                                alt=""
                              />
                            </Link>
                            <Body>
                              <label2>
                                <Link to={`/casos/${caso.id}`}>
                                  {caso.nome}
                                </Link>
                              </label2>
                              <label1>
                                <br />
                                Porte: {getDcrPorte(caso.porte)}
                                <br />
                                Sexo: {getDcrSexo(caso.sexo)}
                                <br />
                                Idade: {calculaIdade(caso.data_nascimento)}
                              </label1>
                            </Body>
                          </Content>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
