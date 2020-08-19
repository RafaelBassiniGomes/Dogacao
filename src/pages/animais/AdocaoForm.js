import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea, Select } from '@rocketseat/unform';
import { ContainerForm } from './styles';
import { updateAdocaoRequest } from '~/store/modules/adocao/actions';

import {
  ListaSexo,
  ListaEstadoCivil,
  ListaEnergia,
  ListaMoraEm,
  ListaTipoMoradia,
} from '~/components/PerfilAdocao';
import { ListaEstados } from '~/components/Estados/index';

import MasterAnimais from './masterAnimais';

export default function AdocaoForm() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  // const adocao = useSelector(state => state.adocao.perfil);
  const caso = useSelector(state => state.caso.perfil);

  let isResponsavel = false;
  const listaSexo = new ListaSexo();
  const listaEstadoCivil = new ListaEstadoCivil();
  const listaEnergia = new ListaEnergia();
  const listaMoraEm = new ListaMoraEm();
  const listaTipoMoradia = new ListaTipoMoradia();
  const listaEstados = new ListaEstados();

  if (caso && profile && caso.abrigo && caso.abrigo.user_id === profile.id)
    isResponsavel = true;
  const token = useSelector(state => state.auth.token);

  function handleSubmit(data) {
    data.abrigo_id = caso.abrigo_id;
    data.animal_id = caso.id;
    dispatch(updateAdocaoRequest(data, token));
  }
  return (
    <MasterAnimais caso={caso} isResponsavel={isResponsavel}>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="exampleInput1">Nome*</label>
          <Input name="id" hidden />
          <Input name="animal_id" hidden />
          <Input name="abrigo_id" hidden />
          <Input name="nome" placeholder="Campo Obrigatório" maxLength="100" />
          <label htmlFor="exampleInput1">email*</label>
          <Input
            name="email"
            type="email"
            placeholder="Campo Obrigatório"
            maxLength="100"
          />
          <label htmlFor="exampleInput1">telefone*</label>
          <Input
            name="telefone"
            placeholder="Campo Obrigatório"
            maxLength="20"
          />
          <label htmlFor="exampleInput1">idade*</label>
          <Input
            name="idade"
            placeholder="Campo Obrigatório"
            type="number"
            maxLength="3"
          />
          <label htmlFor="exampleInput3">Sexo*</label>
          <Select
            name="sexo"
            options={listaSexo}
            placeholder="Campo Obrigatório"
          />
          <label htmlFor="exampleInput4">Estado Civil*</label>
          <Select
            name="estado_civil"
            options={listaEstadoCivil}
            placeholder="Campo Obrigatório"
          />
          <label htmlFor="exampleInput3">Estado*</label>
          <Select
            name="estado"
            options={listaEstados}
            placeholder="Campo Obrigatório"
          />
          <label htmlFor="exampleInput1">Cidade*</label>
          <Input name="cidade" placeholder="Campo Obrigatório" maxLength="50" />
          <label htmlFor="exampleInput1">Bairro*</label>
          <Input name="bairro" placeholder="Campo Obrigatório" maxLength="50" />
          <label htmlFor="exampleInput1">Endereço*</label>
          <Input
            name="endereco"
            placeholder="Campo Obrigatório"
            maxLength="100"
          />
          <label htmlFor="exampleInput1">Número*</label>
          <Input name="numero" maxLength="10" />
          <label htmlFor="exampleInput1">Complemento</label>
          <Input name="complemento" maxLength="100" />
          <label htmlFor="exampleInput5">
            Como é sua Energia Diáriamente?*
          </label>
          <Select
            name="energia"
            placeholder="Campo Obrigatório"
            options={listaEnergia}
          />
          <label htmlFor="exampleInput6">Mora Em:*</label>
          <Select
            name="mora_em"
            placeholder="Campo Obrigatório"
            options={listaMoraEm}
          />
          <label htmlFor="exampleInput7">Tipo de Moradia*</label>
          <Select
            name="tipo_moradia"
            placeholder="Campo Obrigatório"
            options={listaTipoMoradia}
          />
          <label htmlFor="exampleInput1">Quantos filhos tem?</label>
          <Input name="qtd_filhos" maxLength="3" type="number" />
          <label htmlFor="exampleInput1">Quantos são menores de 5 anos?</label>
          <Input name="qtd_filhos_menor" maxLength="3" type="number" />
          <label htmlFor="exampleInput1">
            Quantas horas por dia o animal teria supervisão?
          </label>
          <Input
            name="tempo_livre"
            placeholder="Campo Obrigatório"
            maxLength="3"
            type="number"
          />
          <label htmlFor="exampleInput9">
            Por qual motivo deseja adotar um animal?*
          </label>
          <Textarea name="descricao" rows="5" placeholder="Campo Obrigatório" />
          <hr />
          <button type="submit">Salvar</button>
        </Form>
      </ContainerForm>
    </MasterAnimais>
  );
}
