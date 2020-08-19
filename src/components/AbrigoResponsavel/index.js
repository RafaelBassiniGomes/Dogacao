import React, { Component } from 'react';

import abrigoAPI from '~/logicas/AbrigosApi';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abrigos: [],
    };
  }

  componentDidMount() {
    abrigoAPI.listaAbrigoResponsavel().then(res => {
      this.setState({ abrigos: [...this.state.abrigos, ...res.data] });
    });
  }

  render() {
    return (
      <select {...this.props}>
        {this.state.abrigos.map(abrigo => (
          <option key={abrigo.id}>{abrigo.nome}</option>
        ))}
      </select>
    );
  }
}

export default Index;
