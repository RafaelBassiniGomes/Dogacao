import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';
import MasterProfile from './masterProfile';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .required('Obrigatório para troca de senha')
          .min(6, 'No mínimo 6 caracteres')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Obrigatório para troca de senha')
          .min(6, 'No mínimo 6 caracteres')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <MasterProfile profile={profile}>
      <Container>
        <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <Input name="avatar_id" hidden />
          <Input
            readOnly
            name="email"
            type="email"
            placeholder="Seu endereço de e-mail"
          />

          <hr />

          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha atual"
          />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmação de senha"
          />

          <button type="submit">Atualizar perfil</button>
        </Form>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignOut}
        >
          Sair
        </button>
      </Container>
    </MasterProfile>
  );
}
