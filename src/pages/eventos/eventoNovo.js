import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea, Select } from '@rocketseat/unform';
import InputMask from 'react-input-mask';
import { ContainerNovo } from './styles';
import { updateEventoRequest } from '~/store/modules/evento/actions';
import { ListaEstados } from '~/components/Estados/index';

import abrigoApi from '~/logicas/AbrigosApi';
import history from '~/services/history';

export default function CadastroAnimal({ match }) {
  const profile = useSelector(state => state.user.profile);
  if (!profile) history.push('/login');

  const dispatch = useDispatch();
  const lista = new ListaEstados();
  const [abrigoid, setAbrigoid] = useState('');
  const [dtEvento, setDtEvento] = useState('');
  let evento = useSelector(state => state.evento.perfilEdicao);
  if (!match.params.id) evento = null;

  const [abrigos, setAbrigos] = useState([]);

  useEffect(() => {
    async function loadAbrigos() {
      const response = await abrigoApi.listaAbrigoResponsavel();
      setAbrigos(response.data);
      if (evento) {
        setAbrigoid(evento.abrigo_id);
        setDtEvento(evento.data_evento);
      }
    }
    loadAbrigos();
  }, [evento]);

  const token = useSelector(state => state.auth.token);

  function handleSubmit(data) {
    dispatch(updateEventoRequest(data, token));
  }
  function onChangeFunc(e) {
    setAbrigoid(e.value);
  }
  function onChangeDtEvento(e) {
    setDtEvento(e.value);
  }
  return (
    <ContainerNovo>
      <Form initialData={evento} onSubmit={handleSubmit}>
        <label htmlFor="exampleInput1">Nome*</label>
        <Input name="id" hidden />
        <Input name="titulo" placeholder="Nome" />
        <label htmlFor="exampleInput2">Abrigo</label>
        <Select
          name="abrigo_id"
          options={abrigos}
          value={abrigoid}
          onChange={onChangeFunc}
        />
        <label htmlFor="exampleInput1">Data do Evento*</label>
        <InputMask
          mask="99/99/9999"
          value={dtEvento}
          onChange={onChangeDtEvento}
        >
          {() => <Input name="data_evento" />}
        </InputMask>
        <label htmlFor="exampleInput1">Local do Evento*</label>
        <Input name="local" placeholder="Local do Evento" />
        <label htmlFor="exampleInput3">Estado*</label>
        <Select name="estado" options={lista} />
        <label htmlFor="exampleInput1">Cidade*</label>
        <Input name="cidade" placeholder="Cidade" />
        <label htmlFor="exampleInput1">Bairro*</label>
        <Input name="bairro" placeholder="Bairro" />
        <label htmlFor="exampleInput1">Endereço*</label>
        <Input name="endereco" placeholder="Endereço" />
        <label htmlFor="exampleInput1">Número*</label>
        <Input name="numero" placeholder="Número" />
        <label htmlFor="exampleInput1">Ponto de Referência</label>
        <Input name="referencia" placeholder="Ponto de Referência" />
        <label htmlFor="exampleInput9">Descrição*</label>
        <Textarea name="descricao" rows="5" placeholder="Descrição" />
        <hr />
        <button type="submit">Salvar</button>
      </Form>
    </ContainerNovo>
  );
}
