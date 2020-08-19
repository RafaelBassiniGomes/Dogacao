import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Menu({ profile }) {
  return (
    <div>
      {profile ? (
        <div className="dropdown">
          <Link
            to="/profile"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            className="userMenu"
          >
            <img
              src={
                profile && profile.avatar
                  ? profile.avatar.url_100
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
              className="avatar"
            />
            <span>{profile.name}</span>
          </Link>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

Menu.propTypes = {
  profile: PropTypes.element.isRequired,
};
