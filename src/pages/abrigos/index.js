import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Select } from '@rocketseat/unform';
import abrigoAPI from '~/logicas/AbrigosApi';
import logo from '~/assets/abrigosemlogo.jpg';

import { Content, Body } from './styles';
import { ListaEstados } from '~/components/Estados/index';

const listaEstados = new ListaEstados();

function searchFor(estado) {
  return function(x) {
    return x.estado === estado || !estado;
  };
}
class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abrigos: [],
      estado: '',
    };
    this.searchEstado = this.searchEstado.bind(this);
  }

  componentDidMount() {
    abrigoAPI.listaAbrigos().then(res => {
      this.setState({ abrigos: [...this.state.abrigos, ...res.data] });
    });
  }

  searchEstado(event) {
    this.setState({ estado: event.target.value });
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
                  <div className="col-md-7">
                    <Link to="/abrigos/Novo" className="btn btn-primary">
                      Cadastrar abrigo
                    </Link>
                  </div>
                  <div className="col-md-5">
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
                    {this.state.abrigos
                      .filter(searchFor(this.state.estado))
                      .map(abrigo => (
                        <div className=" col-lg-3">
                          <Content>
                            <Link to={abrigo.slug}>
                              <img
                                src={
                                  abrigo.avatar ? abrigo.avatar.url_300 : logo
                                }
                                alt=""
                              />
                            </Link>
                            <Body>
                              <label2>
                                <Link to={abrigo.slug}>{abrigo.nome}</Link>
                              </label2>
                              <br />
                              <label1>
                                {abrigo.cidade}/{abrigo.estado}
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
