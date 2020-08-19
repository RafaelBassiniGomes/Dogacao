import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import filesApi from '~/logicas/FilesApi';
import eventosApi from '~/logicas/EventosApi';
import logo from '~/assets/abrigosemlogo.jpg';
import { Container } from './styles';
import { updateEventoRequest } from '~/store/modules/evento/actions';

export default function AvatarInput({ evento }) {
  const dispatch = useDispatch();
  const defaultValue = evento && evento.avatar ? evento.avatar : null;
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url_300);
  const ref = useRef();
  const token = useSelector(state => state.auth.token);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await filesApi.createFile(data);
    const { id } = response.data;
    let url = '';
    if (response.data.url_300) url = response.data.url_300;

    const response2 = await eventosApi.listaEventos();
    const respCaso = response2.data.find(a => a.id === evento.id);

    respCaso.avatar_id = id;

    setFile(id);
    setPreview(url);

    dispatch(updateEventoRequest(respCaso, token));
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
  evento: PropTypes.element.isRequired,
};
