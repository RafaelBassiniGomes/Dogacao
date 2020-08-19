import React from 'react';
import PropTypes from 'prop-types';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

export default function estrelas({ qtdEstrelas }) {
  const rows = [];
  if (qtdEstrelas >= 5) qtdEstrelas = 5;
  const semEstrela = 5 - qtdEstrelas;

  for (let i = 0; i < qtdEstrelas; i++) {
    rows.push(<IoIosStar />);
  }
  for (let i = 0; i < semEstrela; i++) {
    rows.push(<IoIosStarOutline />);
  }
  return (
    <div>
      <ul>{rows}</ul>
    </div>
  );
}

estrelas.propTypes = {
  qtdEstrelas: PropTypes.element.isRequired,
};
