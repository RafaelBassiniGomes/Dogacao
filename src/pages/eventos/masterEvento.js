import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';
import Helmet from 'react-helmet';
import logo from '~/assets/abrigosemlogo.jpg';
import AvatarInput from './AvatarInput';

export default function masterAnimais({ children, evento, isResponsavel }) {
  return (
    <div>
      <Helmet>
        <meta property="og:description" content={evento.titulo} />
        <meta
          property="og:image"
          content={evento.avatar ? evento.avatar.url_600 : logo}
        />
        <meta property="og:url" content={`/eventos/${evento.id}`} />
      </Helmet>
      <div className="container corpo pagAbrigo">
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/eventos">eventos</Link>
              </li>
              <li className="active">
                <Link to={`/eventos/${evento.id}`}> {evento.titulo}</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 colAbrigo">
            <div className="row">
              <div className="col-xs-12 abrigoAvatar">
                {isResponsavel ? (
                  <AvatarInput evento={evento} />
                ) : (
                  <img
                    src={evento && evento.avatar ? evento.avatar.url_300 : logo}
                    alt=""
                    className="img-responsive"
                  />
                )}
              </div>

              <div className="col-xs-12">
                <h1>
                  <a href={evento.id}>{evento.nome}</a>
                </h1>
                <strong>{evento.local}</strong>
                <br />
                {evento.endereco}, {evento.numero} <br />
                {evento.bairro}, {evento.cidade}, {evento.estado}
                <br />
                <nav className="abrigoMenu">
                  <ul className="list-unstyled">
                    <li>
                      <Link to={`/eventos/${evento.id}`}>Evento</Link>
                    </li>

                    {isResponsavel ? (
                      <li>
                        <Link to={`/eventos/${evento.id}/editar`}>
                          <a href="a">Editar</a>
                        </Link>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              </div>

              <div className="col-xs-12 banner">
                <AdSense.Google
                  client="ca-pub-1964780288547257"
                  slot="8539124637"
                  style={{ width: 200, height: 300, float: 'left' }}
                  format=""
                />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

masterAnimais.propTypes = {
  children: PropTypes.element.isRequired,
  evento: PropTypes.element.isRequired,
  isResponsavel: PropTypes.element.isRequired,
};
