import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import abrigosApi from '~/logicas/AbrigosApi';
import adocoesApi from '~/logicas/AdocoesApi';
import history from '~/services/history';
import MasterAbrigo from './masterAbrigo';
import {
  listagemSlug,
  carregaAbrigoResponsavel,
} from '~/store/modules/abrigo/actions';

import { listagemAdocao } from '~/store/modules/adocao/actions';

import { getDcrStatus } from '~/components/PerfilAdocao';

export default function QuemSomos({ match }) {
  const profile = useSelector(state => state.user.profile);
  const [abrigo, setAbrigo] = useState([]);
  const [adocoes, setAdocoes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadAbrigos() {
      const response = await abrigosApi.listaAbrigos();
      const respAbrigo = response.data.find(a => a.slug === match.params.slug);

      setAbrigo(respAbrigo);

      const response2 = await adocoesApi.listaFormAdocaoAbrigo(respAbrigo.id);

      setAdocoes(response2.data);
    }
    loadAbrigos();
  }, [match.params.slug]);
  let isResponsavel = false;
  if (abrigo && profile && abrigo.user && abrigo.user.id === profile.id) {
    isResponsavel = true;
    dispatch(carregaAbrigoResponsavel(abrigo));
  } else dispatch(listagemSlug(abrigo));

  function VisualizarLinha(id) {
    const adocao = adocoes.find(a => a.id === id);
    dispatch(listagemAdocao(adocao));
    history.push(`/${abrigo.slug}/formularios/${id}`);
  }

  return (
    <MasterAbrigo abrigo={abrigo} isResponsavel={isResponsavel}>
      <div className="col-lg-9 col-md-8 materia">
        <div className="row">
          <div className="col-xs-12 timeline" />

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Animal</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Cidade</th>
                <th>Bairro</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {adocoes
                ? adocoes.map(adocao => (
                    <tr key={adocao.id}>
                      <td> {adocao.animal.nome} </td>
                      <td> {adocao.nome} </td>
                      <td> {adocao.email} </td>
                      <td> {adocao.telefone} </td>
                      <td> {adocao.cidade} </td>
                      <td> {adocao.bairro} </td>
                      <td> {getDcrStatus(adocao.status)} </td>
                      <td>
                        <button
                          onClick={() => {
                            VisualizarLinha(adocao.id);
                          }}
                        >
                          Visualizar
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </MasterAbrigo>
  );
}
