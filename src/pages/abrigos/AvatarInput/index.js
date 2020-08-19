import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import api from '~/services/api';
import logo from '~/assets/abrigosemlogo.jpg';
import { Container } from './styles';
import { updateAbrigoRequest } from '~/store/modules/abrigo/actions';

export default function AvatarInput({ abrigo }) {
  const dispatch = useDispatch();
  const defaultValue =
    abrigo && abrigo.avatar && abrigo.avatar.url_300 ? abrigo.avatar : null;
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(
    defaultValue && defaultValue.url_300 ? defaultValue.url_300 : logo
  );
  const ref = useRef();
  const token = useSelector(state => state.auth.token);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    const response2 = await api.get('abrigos');
    const rAbrigo = response2.data.find(a => a.id === abrigo.id);

    rAbrigo.avatar_id = id;

    setFile(id);
    setPreview(url);

    dispatch(updateAbrigoRequest(rAbrigo, token));
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || logo}
          alt=""
          title="Clique aqui para alterar a imagem"
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  abrigo: PropTypes.element.isRequired,
};
