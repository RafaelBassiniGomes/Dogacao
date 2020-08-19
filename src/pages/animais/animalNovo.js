import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea, Select } from '@rocketseat/unform';
import InputMask from 'react-input-mask';
import { ContainerNovo } from './styles';
import { updateCasoRequest } from '~/store/modules/caso/actions';
import {
  ListaPerfilAnimal,
  ListaPorte,
  ListaTipo,
  ListaSexo,
  ListaCastrado,
} from '~/components/PerfilAnimal';
import abrigoApi from '~/logicas/AbrigosApi';
import history from '~/services/history';

export default function CadastroAnimal({ match }) {
  const profile = useSelector(state => state.user.profile);
  if (!profile) history.push('/login');

  const dispatch = useDispatch();
  const [abrigoid, setAbrigoid] = useState('');
  const [dtNascimento, setDtNascimento] = useState('');
  const [dtResgate, setDtResgate] = useState('');
  let caso = useSelector(state => state.caso.perfilEdicao);
  if (!match.params.id) caso = null;

  const listaPerfilAnimal = new ListaPerfilAnimal();
  const listaPorte = new ListaPorte();
  const listaTipo = new ListaTipo();
  const listaSexo = new ListaSexo();
  const listaCastrado = new ListaCastrado();

  const [abrigos, setAbrigos] = useState([]);

  useEffect(() => {
    async function loadAbrigos() {
      const response = await abrigoApi.listaAbrigoResponsavel();
      setAbrigos(response.data);
      if (caso) {
        setAbrigoid(caso.abrigo_id);
        setDtNascimento(caso.data_nascimento);
        setDtResgate(caso.data_resgate);
      }
    }
    loadAbrigos();
  }, [caso]);

  const token = useSelector(state => state.auth.token);

  function handleSubmit(data) {
    dispatch(updateCasoRequest(data, token));
  }
  function onChangeFunc(e) {
    setAbrigoid(e.value);
  }
  function onChangeDtNascimento(e) {
    setDtNascimento(e.value);
  }
  function onChangeDtResgate(e) {
    setDtResgate(e.value);
  }
  return (
    <ContainerNovo>
      <Form initialData={caso} onSubmit={handleSubmit}>
        <label htmlFor="exampleInput1">Nome*</label>
        <Input name="id" hidden />
        <Input name="nome" placeholder="Nome" />
        <label htmlFor="exampleInput1">Peso*</label>
        <Input name="peso" placeholder="Peso" />
        <label htmlFor="exampleInput1">Data de Nascimento (Aproximada)*</label>
        <InputMask
          mask="99/99/9999"
          value={dtNascimento}
          onChange={onChangeDtNascimento}
        >
          {() => <Input name="data_nascimento" />}
        </InputMask>
        <label htmlFor="exampleInput1">Data do resgate*</label>
        <InputMask
          mask="99/99/9999"
          value={dtResgate}
          onChange={onChangeDtResgate}
        >
          {() => <Input name="data_resgate" />}
        </InputMask>
        <label htmlFor="exampleInput2">Abrigo*</label>
        <Select
          name="abrigo_id"
          options={abrigos}
          value={abrigoid}
          onChange={onChangeFunc}
        />
        <label htmlFor="exampleInput3">Tipo*</label>
        <Select name="tipo" options={listaTipo} />
        <label htmlFor="exampleInput3">Sexo*</label>
        <Select name="sexo" options={listaSexo} />
        <label htmlFor="exampleInput3">Castrado*</label>
        <Select name="castrado" options={listaCastrado} />
        <label htmlFor="exampleInput4">Porte*</label>
        <Select name="porte" options={listaPorte} />
        <label htmlFor="exampleInput5">Energia*</label>
        <Select name="energia" options={listaPerfilAnimal} />
        <label htmlFor="exampleInput6">Amizade com cães*</label>
        <Select name="amizade_caes" options={listaPerfilAnimal} />
        <label htmlFor="exampleInput7">Amizade com estranhos*</label>
        <Select name="amizade_estranhos" options={listaPerfilAnimal} />
        <label htmlFor="exampleInput8">Amizade com criancas*</label>
        <Select name="amizade_crianca" options={listaPerfilAnimal} />
        <label htmlFor="exampleInput9">Quem sou?*</label>
        <Textarea name="descricao" rows="5" placeholder="Como Ajudar" />
        <hr />
        <button type="submit">Salvar</button>
      </Form>
    </ContainerNovo>
  );
}
