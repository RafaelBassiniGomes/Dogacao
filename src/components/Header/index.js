import React from 'react';
import { useSelector } from 'react-redux';

import MenuMob from '../MenuMob/menuMob';
import Menu from '../Menu';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <header className="topo">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 busca">
            <MenuMob profile={profile} />
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3 hidden-xs user">
            <Menu profile={profile} />
          </div>
        </div>
      </div>
    </header>
  );
}
