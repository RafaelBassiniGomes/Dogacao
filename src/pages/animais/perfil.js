import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import casoApi from '~/logicas/CasosApi';
import {
  listagemCaso,
  carregaCasoResponsavel,
} from '~/store/modules/caso/actions';

import MasterAnimais from './masterAnimais';
import Estrelas from '~/components/Estrelas';
import {
  getDcrPorte,
  getDcrSexo,
  getDcrCastrado,
} from '~/components/PerfilAnimal';
import { converteTextoHtml } from '~/logicas/Funcoes';

export default function Registro({ match }) {
  const profile = useSelector(state => state.user.profile);
  const [caso, setCaso] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadCaso() {
      const response = await casoApi.listaCasoId(match.params.id);

      casoApi.ConverteDatasCaso(response.data);
      response.data.descricaoHtml = converteTextoHtml(response.data.descricao);
      setCaso(response.data);
    }
    loadCaso();
  }, [match.params.id]);
  let isResponsavel = false;

  if (caso && profile && caso.abrigo && caso.abrigo.user_id === profile.id) {
    isResponsavel = true;
    dispatch(carregaCasoResponsavel(caso));
  } else dispatch(listagemCaso(caso));

  return (
    <MasterAnimais caso={caso} isResponsavel={isResponsavel}>
      <div className="col-lg-9 col-md-8 materia">
        <div className="row">
          <div className="col-xs-12 timeline">
            <span>Sexo: {getDcrSexo(caso.sexo)} </span>
            <br />
            <span>Castrado: {getDcrCastrado(caso.castrado)} </span>
            <br />
            <span>Porte: {getDcrPorte(caso.porte)} </span>
            <br />
            <span>Peso: {caso.peso ? caso.peso : 0} kg </span>
            <br />
            <span>Idade: {caso.idade} </span>
            <br />

            <br />

            <span>Energia</span>
            <Estrelas qtdEstrelas={caso.energia} />
            <span>Amizade com crianças</span>
            <Estrelas qtdEstrelas={caso.amizade_crianca} />
            <span>Amizade com estranhos</span>
            <Estrelas qtdEstrelas={caso.amizade_estranhos} />
            <span>Amizade com outros cães</span>
            <Estrelas qtdEstrelas={caso.amizade_caes} />
            <h2>Quem sou</h2>
            <span>{caso.descricaoHtml}</span>
          </div>
        </div>
      </div>
    </MasterAnimais>
  );
}
