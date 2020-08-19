import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea, Select } from '@rocketseat/unform';
import { ContainerForm } from './styles';
import {
  updateAdocaoRequest,
  aprovarAdocao,
  reprovarAdocao,
} from '~/store/modules/adocao/actions';

import {
  ListaSexo,
  ListaEstadoCivil,
  ListaEnergia,
  ListaMoraEm,
  ListaTipoMoradia,
} from '~/components/PerfilAdocao';
import { ListaEstados } from '~/components/Estados/index';

import MasterAbrigo from './masterAbrigo';

export default function AdocaoForm() {
  const dispatch = useDispatch();
  const listaSexo = new ListaSexo();
  const listaEstadoCivil = new ListaEstadoCivil();
  const listaEnergia = new ListaEnergia();
  const listaMoraEm = new ListaMoraEm();
  const listaTipoMoradia = new ListaTipoMoradia();
  const listaEstados = new ListaEstados();
  const profile = useSelector(state => state.user.profile);
  const abrigo = useSelector(state => state.abrigo.perfil);
  const adocao = useSelector(state => state.adocao.perfil);

  let isResponsavel = false;

  if (profile && abrigo && abrigo.user.id === profile.id) isResponsavel = true;
  const token = useSelector(state => state.auth.token);

  function handleSubmit(data) {
    dispatch(updateAdocaoRequest(data, token));
  }
  function Aprovar() {
    dispatch(aprovarAdocao(adocao, token));
  }

  function Reprovar() {
    dispatch(reprovarAdocao(adocao, token));
  }
  return (
    <MasterAbrigo abrigo={abrigo} isResponsavel={isResponsavel}>
      <ContainerForm>
        <Form initialData={adocao} onSubmit={handleSubmit}>
          <label htmlFor="exampleInput1">Animal</label>
          <Input
            name="animal"
            value={adocao.animal.nome}
            readOnly
            maxLength="100"
          />
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
          <Select name="sexo" options={listaSexo} />
          <label htmlFor="exampleInput4">Estado Civil*</label>
          <Select name="estado_civil" options={listaEstadoCivil} />
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
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </Form>
        <Form>
          <button
            className="btn btn-success"
            onClick={() => {
              Aprovar();
            }}
          >
            Aprovar Adoção
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              Reprovar();
            }}
          >
            Reprovar Adoção
          </button>
        </Form>
      </ContainerForm>
    </MasterAbrigo>
  );
}
