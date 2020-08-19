import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AdSense from 'react-adsense';
import eventoApi from '~/logicas/EventosApi';

import semFoto from '~/assets/abrigosemlogo.jpg';
import { converteTextoHtml } from '~/logicas/Funcoes';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventos: [],
    };
  }

  componentDidMount() {
    eventoApi.listaEventos().then(res => {
      this.setState({ eventos: [...this.state.eventos, ...res.data] });
    });
  }

  render() {
    return (
      <div className="container corpo feed">
        <header className="filtro">
          <div className="row">
            <div className="col-md-12 col-lg-12 ">
              <div className="row">
                <div className="col-md-3">
                  <Link to="/Eventos/novo" class="btn btn-primary">
                    Cadastrar Evento
                  </Link>
                </div>
                <div className="col-md-6 text-right" />
              </div>
            </div>
            <div className="col-xs-12 col-lg-12">
              <hr />
            </div>
          </div>
        </header>

        <div className="row">
          <div className="col-md-8 col-lg-8 timeline">
            <div className="row">
              <div className="col-xs-12">
                {this.state.eventos.map(evento => (
                  <article className="box padding-15 post">
                    <header>
                      <h2>
                        <Link to={`eventos/${evento.id}`}>{evento.titulo}</Link>
                      </h2>
                      <address>
                        <strong>{evento.local}</strong>
                        <br />
                        {evento.endereco}, {evento.numero} <br />
                        {evento.bairro}, {evento.cidade}, {evento.estado}
                        <br />
                      </address>
                      <p>
                        <small>
                          {eventoApi.ConverteDatasEvento(evento)}
                          {evento.data_evento}
                        </small>
                      </p>
                    </header>
                    {evento && evento.avatar ? (
                      <div>
                        <Link to={`eventos/${evento.id}`}>
                          <img
                            src={
                              evento && evento.avatar
                                ? evento.avatar.url_600
                                : semFoto
                            }
                            className="img-responsive"
                            alt="..."
                          />
                        </Link>
                        &nbsp;&nbsp;
                      </div>
                    ) : null}
                    <div>{converteTextoHtml(evento.descricao)}</div>

                    <footer>
                      <hr className="break-15" />
                      <ul className="list-unstyled">
                        <li>
                          <Link to={`eventos/${evento.id}`}>Ver Evento</Link>
                        </li>
                      </ul>
                    </footer>
                  </article>
                ))}
              </div>
              <div className="col-xs-3" />
              <div className="col-xs-5" />
              <div className="col-xs-3" />
            </div>
          </div>

          <div className="col-md-4 col-lg-4 hidden-sm hidden-xs">
            <div className="row ads" id="ads">
              <div className="col-xs-12 banner">
                <AdSense.Google
                  client="ca-pub-1964780288547257"
                  slot="2592230525"
                  style={{ width: 300, height: 250, float: 'left' }}
                  format=""
                />
              </div>
              <div className="col-xs-12 banner">
                <AdSense.Google
                  client="ca-pub-1964780288547257"
                  slot="2592230525"
                  style={{ width: 300, height: 250, float: 'left' }}
                  format=""
                />
              </div>

              <div className="col-xs-12 auxLinks text-center">
                <Link to="/faleconosco">Fale Conosco</Link>
                <br />
                <Link to="/parceiros">Conheça nossos parceiros</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
