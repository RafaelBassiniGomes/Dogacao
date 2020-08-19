import React from 'react';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <img className="logo" src="img/logo.png" alt="" />
          </div>

          <div className="col-lg-2 col-md-3">
            <ul className="list-unstyled">
              <li>Institucional</li>
              <li>
                <Link to="/quemsomos">Quem somos</Link>
              </li>
              <li>
                <Link to="/faleconosco">Fale conosco</Link>
              </li>
              <li>
                <Link to="/parceiros">Parceiros</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3">
            <ul className="list-unstyled">
              <li>Minha Conta</li>
              <li>
                <Link to="/profile">Meus dados</Link>
              </li>

              <li>
                <Link to="/PoliticaDePrivacidade">Política De Privacidade</Link>
              </li>
              <li>
                <a href="https://www.google.com/policies/privacy/partners">
                  Google Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-8 col-md-6 col-xs-12">
            <div className="row">
              <div className="hidden-sm hidden-md hidden-lg">
                <br />
                <br />
              </div>
              <div className="col-sm-6 text-right">
                <AdSense.Google
                  client="ca-pub-1964780288547257"
                  slot="2592230525"
                  style={{ width: 300, height: 250, float: 'left' }}
                  format=""
                />
              </div>
              <div className="hidden-sm hidden-md hidden-lg">
                <br />
                <br />
              </div>
              <div className="col-sm-6 text-right">
                <AdSense.Google
                  client="ca-pub-1964780288547257"
                  slot="2592230525"
                  style={{ width: 300, height: 250, float: 'left' }}
                  format=""
                />
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="subRodape">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              DogAção 2017 - Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
