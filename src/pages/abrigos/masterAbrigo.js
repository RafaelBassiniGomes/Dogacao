import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';
import Helmet from 'react-helmet';
import logo from '~/assets/abrigosemlogo.jpg';
import AvatarInput from './AvatarInput';

export default function masterAbrigo({ children, abrigo, isResponsavel }) {
  return (
    <div>
      <Helmet>
        <meta property="og:description" content={abrigo.nome} />
        <meta
          property="og:image"
          content={abrigo.avatar ? abrigo.avatar.url_600 : logo}
        />
        <meta property="og:image:width" content="600" />
        <meta
          property="og:url"
          content={`https://dogacao.org/${abrigo.slug}`}
        />
      </Helmet>

      <div className="container corpo pagAbrigo">
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/abrigos">Abrigos</a>
              </li>
              <li className="active">
                {abrigo.cidade} / {abrigo.estado}
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 colAbrigo">
            <div className="row">
              <div className="col-xs-12 abrigoAvatar">
                {isResponsavel ? (
                  <AvatarInput abrigo={abrigo} />
                ) : (
                  <img
                    src={abrigo.avatar ? abrigo.avatar.url_300 : logo}
                    alt=""
                    className="img-responsive"
                  />
                )}
              </div>

              <div className="col-xs-12">
                <h1>
                  <Link to={`/${abrigo.slug}`}>{abrigo.nome}</Link>
                </h1>
                <p className="local">
                  {abrigo.cidade} / {abrigo.estado}
                </p>

                <nav className="abrigoMenu">
                  <ul className="list-unstyled">
                    <li>
                      <Link to={`/${abrigo.slug}/Adocao/`}>
                        Disponíveis para Adoção
                      </Link>
                    </li>
                    {isResponsavel ? (
                      <div>
                        <li>
                          <Link to={`/${abrigo.slug}/editar`}>Editar</Link>
                        </li>
                        <li>
                          <Link to={`/${abrigo.slug}/formularios`}>
                            Formulários de adoção
                          </Link>
                        </li>
                      </div>
                    ) : null}
                    <li>
                      <Link to={`/${abrigo.slug}/quemsomos/`}>Quem somos</Link>
                    </li>
                    <li>
                      <Link to={`/${abrigo.slug}/faleconosco/`}>
                        Fale conosco
                      </Link>
                    </li>
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

masterAbrigo.propTypes = {
  children: PropTypes.element.isRequired,
  abrigo: PropTypes.element.isRequired,
  isResponsavel: PropTypes.element.isRequired,
};
