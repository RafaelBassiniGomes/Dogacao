import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} width="100px" alt="Dogacao" />
          <Link to="/Abrigos">Abrigos</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/Adocoes">Adoções</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Eventos">Eventos</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Parceiros">Parceiros</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url_100 ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Rafael Bassini Gomes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
