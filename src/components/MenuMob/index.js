import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MenuMob({ profile }) {
  return (
    <div>
      <div className="col-sm-1 col-xs-2 hidden-md hidden-lg">
        <div className="dropdown">
          <a
            href="#"
            className="menuMobile"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-bars" />
          </a>

          <ul className="dropdown-menu" aria-labelledby="dLabel">
            <li className="dropdown-header">Menu</li>
            <li>
              <Link to="/">Feed</Link>
            </li>
            <li>
              <Link to="abrigos">Abrigos</Link>
            </li>
            <li>
              <Link to="casos">Casos</Link>
            </li>
            {profile ? (
              <div>
                <li>&nbsp; </li>

                <li className="dropdown-header">Minha conta</li>
                <li>
                  <a href="meus-dados.php">Meus dados</a>
                </li>
                <li>
                  <a href="meus-abrigos.php">Meus Abrigos</a>
                </li>
                <li>
                  <a href="casos-acompanho.php">Casos que acompanho</a>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a href="logout.php">Encerrar sessão</a>
                </li>
              </div>
            ) : (
              <div>
                <li role="separator" className="divider" />
                <li>
                  <a href="login.php">Acessar</a>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
      <div className="col-md-2 col-sm-3 col-xs-4 logo">
        <Link to="/">
          <img src="img/logo.png" alt="" />
        </Link>
      </div>

      <div className="col-md-5 col-lg-4 hidden-sm hidden-xs">
        <nav className="menu">
          <ul className="list-unstyled">
            <li>
              <Link to="/">Feed</Link>
            </li>
            <li>
              <Link to="/abrigos">Abrigos</Link>
            </li>
            <li>
              <Link to="/casos">Casos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

MenuMob.propTypes = {
  profile: PropTypes.element.isRequired,
};
