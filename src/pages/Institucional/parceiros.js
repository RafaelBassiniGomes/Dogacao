import React, { Component } from 'react';

import MasterInstitucional from './masterInstitucional';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parceiros: [],
    };
  }

  /*
  componentDidMount() {
    // parceirosApi.listaParceiros().then(res => {
    //  this.setState({ parceiros: [...this.state.parceiros, ...res.data] });
    // });
  }
*/
  render() {
    return (
      <MasterInstitucional>
        <div className="col-lg-9 col-md-8 materia">
          <div className="row">
            <div className="col-xs-12 timeline">
              <h2>Parceiros</h2>
              <p>Compre com nossos parceiros e nos ajude a melhorar o site</p>

              <div className="row listaParceiros">
                <a
                  href="https://oferta.afiliados.com.br/clique.php?id=59609&franq=AFL-03-206162&tipo=349&url=http%3A%2F%2Fdogacao.org%2Fparceiros.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SubMarino
                </a>
                <br />
                <br />
                <a
                  href="https://oferta.afiliados.com.br/clique.php?id=51354&franq=AFL-03-206162&tipo=205&url=http%3A%2F%2Fdogacao.org%2Fparceiros.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Americanas
                </a>
                <br />
                <br />
                <a
                  href="https://oferta.afiliados.com.br/clique.php?id=51332&franq=AFL-03-206162&tipo=69&url=http%3A%2F%2Fdogacao.org%2Fparceiros.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ShopTime
                </a>
                <br />
                <br />
                <a
                  href="https://oferta.afiliados.com.br/clique.php?id=466&franq=AFL-03-206162&tipo=493&url=http%3A%2F%2Fdogacao.org%2Fparceiros.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SouBarato
                </a>
                <br />
                <br />
                <a
                  href="https://www.magazinevoce.com.br/magazinedogacao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MagazineLuiza
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </MasterInstitucional>
    );
  }
}
export default Index;
