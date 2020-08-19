import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';

export default function masterInstitucional({ children }) {
  return (
    <div>
      <div className="container corpo pagAbrigo">
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li>
                <a href="/"></a>
              </li>
              <li className="active">
                <a href="/QuemSomos">Institucional</a>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 colAbrigo">
            <div className="row">
              <div className="col-xs-12">
                <h1>Institucional</h1>
                <nav className="abrigoMenu">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/QuemSomos">Quem Somos</Link>
                    </li>
                    <li>
                      <Link to="/FaleConosco">Fale Conosco</Link>
                    </li>
                    <li>
                      <Link to="/Parceiros">Parceiros</Link>
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

masterInstitucional.propTypes = {
  children: PropTypes.element.isRequired,
};
