import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';
import Helmet from 'react-helmet';
import logo from '~/assets/abrigosemlogo.jpg';
import AvatarInput from './AvatarInput';

export default function masterAnimais({ children, caso, isResponsavel }) {
  return (
    <div>
      <Helmet>
        <meta property="og:description" content={caso.nome} />
        <meta
          property="og:image"
          content={caso.avatar ? caso.avatar.url_600 : logo}
        />
        <meta property="og:url" content={`/casos/${caso.id}`} />
      </Helmet>
      <div className="container corpo pagAbrigo">
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/abrigos">Abrigos</Link>
              </li>
              {caso.abrigo ? (
                <li className="active">
                  <Link to={`/${caso.abrigo.slug}`}> {caso.abrigo.nome}</Link>
                </li>
              ) : null}
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 colAbrigo">
            <div className="row">
              <div className="col-xs-12 abrigoAvatar">
                {isResponsavel ? (
                  <AvatarInput caso={caso} />
                ) : (
                  <img
                    src={caso && caso.avatar ? caso.avatar.url_300 : logo}
                    alt=""
                    className="img-responsive"
                  />
                )}
              </div>

              <div className="col-xs-12">
                <h1>
                  <a href={caso.id}>{caso.nome}</a>
                </h1>
                <p className="local">{caso.abrigo ? caso.abrigo.nome : null}</p>

                <nav className="abrigoMenu">
                  <ul className="list-unstyled">
                    <li>
                      <Link to={`/casos/${caso.id}`}>Perfil</Link>
                    </li>
                    <li>
                      <Link to={`/casos/adocao/${caso.id}`}>Quero Adotar</Link>
                    </li>
                    {isResponsavel ? (
                      <li>
                        <Link to={`/casos/${caso.id}/editar`}>
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
  caso: PropTypes.element.isRequired,
  isResponsavel: PropTypes.element.isRequired,
};
