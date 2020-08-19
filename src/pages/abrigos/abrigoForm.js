import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea, Select } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { ContainerForm } from './styles';
import { updateAbrigoRequest } from '~/store/modules/abrigo/actions';
import { ListaEstados } from '~/components/Estados/index';
import MasterAbrigo from './masterAbrigo';

export default function CadastroAbrigo({ match }) {
  const dispatch = useDispatch();
  const lista = new ListaEstados();
  let abrigo = useSelector(state => state.abrigo.perfilEdicao);
  if (!match.params.slug) abrigo = null;
  const token = useSelector(state => state.auth.token);
  function handleSubmit(data) {
    dispatch(updateAbrigoRequest(data, token));
  }

  return (
    <MasterAbrigo abrigo={abrigo} isReponsavel="true">
      <ContainerForm>
        <Form initialData={abrigo} onSubmit={handleSubmit}>
          <label htmlFor="exampleInput1">Nome do abrigo*</label>
          <Input name="id" hidden="true" />
          <Input name="nome" placeholder="Nome do Abrigo" />
          <label htmlFor="exampleInput2">E mail*</label>
          <Input name="email" type="email" placeholder="E-mail do Abrigo" />
          <label htmlFor="exampleInput2">Telefone</label>
          <Input name="telefone" placeholder="O telefone não é obrigatório" />
          <label htmlFor="exampleInput3">Estado*</label>
          <Select name="estado" options={lista} />
          <label htmlFor="exampleInputEmail1">Cidade*</label>
          <Input name="cidade" placeholder="Cidade do Abrigo" />
          <label htmlFor="exampleInputEmail1">Bairro*</label>
          <Input name="bairro" placeholder="Bairro do Abrigo" />
          <label htmlFor="exampleInputEmail1">Quem Somos*</label>
          <Textarea name="quemSomos" rows="5" placeholder="Quem Somos" />
          <label htmlFor="exampleInputEmail1">Como Ajudar*</label>
          <Textarea name="comoAjudar" rows="5" placeholder="Como Ajudar" />

          <hr />
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
          <br />
          {abrigo ? (
            <Link to={`/${abrigo.slug}`} className="btn btn-primary">
              Voltar
            </Link>
          ) : (
            <Link to="/abrigos" className="btn btn-primary">
              Voltar
            </Link>
          )}
        </Form>
      </ContainerForm>
    </MasterAbrigo>
  );
}
