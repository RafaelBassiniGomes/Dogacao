import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import filesApi from '~/logicas/FilesApi';
import profileApi from '~/logicas/ProfileApi';
import logo from '~/assets/abrigosemlogo.jpg';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function AvatarInput({ profile }) {
  const dispatch = useDispatch();
  const defaultValue =
    profile && profile.avatar && profile.avatar.url_300 ? profile.avatar : null;
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(
    defaultValue && defaultValue.url_300 ? defaultValue.url_300 : logo
  );
  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await filesApi.createFile(data);

    const { id, url } = response.data;

    const response2 = await profileApi.getProfileId(profile.id);
    const respProfile = response2.data;

    respProfile.avatar_id = id;

    setFile(id);
    setPreview(url);

    dispatch(updateProfileRequest(respProfile));
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
  profile: PropTypes.element.isRequired,
};
