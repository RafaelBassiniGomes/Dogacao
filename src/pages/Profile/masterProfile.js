import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';
import AvatarInput from './AvatarInput';

export default function masterProfile({ children, profile }) {
  return (
    <div>
      <div className="container corpo pagAbrigo">
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 colAbrigo">
            <div className="row">
              <div className="col-xs-12 abrigoAvatar">
                <AvatarInput profile={profile} />
              </div>

              <div className="col-xs-12">
                <h1>
                  <a href={profile.id}>{profile.name}</a>
                </h1>

                <nav className="abrigoMenu">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/profile">Editar</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-xs-12 banner">
                <AdSense.Google
                  client="ca-pub-1964780288547257"
                  slot="2592230525"
                  style={{ width: 300, height: 250, float: 'left' }}
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

masterProfile.propTypes = {
  children: PropTypes.element.isRequired,
  profile: PropTypes.element.isRequired,
};
