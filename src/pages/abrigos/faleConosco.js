import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/services/history';
import abrigosApi from '~/logicas/AbrigosApi';
import { converteTextoHtml } from '~/logicas/Funcoes';

import MasterAbrigo from './masterAbrigo';
import {
  listagemSlug,
  carregaAbrigoResponsavel,
} from '~/store/modules/abrigo/actions';

export default function QuemSomos({ match }) {
  const profile = useSelector(state => state.user.profile);
  const [abrigo, setAbrigo] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadAbrigos() {
      const response = await abrigosApi.listaAbrigos();
      const respAbrigo = response.data.find(a => a.slug === match.params.slug);
      if (!respAbrigo) history.push('/404');
      else {
        respAbrigo.quemSomosHtml = converteTextoHtml(respAbrigo.quemSomos);
        respAbrigo.comoAjudarHtml = converteTextoHtml(respAbrigo.comoAjudar);

        setAbrigo(respAbrigo);
      }
    }
    loadAbrigos();
  }, [match.params.slug]);
  let isResponsavel = false;
  if (abrigo && profile && abrigo.user && abrigo.user.id === profile.id) {
    isResponsavel = true;
    dispatch(carregaAbrigoResponsavel(abrigo));
  } else dispatch(listagemSlug(abrigo));

  return (
    <MasterAbrigo abrigo={abrigo} isResponsavel={isResponsavel}>
      <div className="col-lg-9 col-md-8 materia">
        <div className="row">
          <div className="col-xs-12 timeline">
            <h2>Fale Conosco</h2>
            <span>
              Entre em contato pelo email&nbsp;
              <b>{abrigo && abrigo.email ? abrigo.email : null}</b>
              {abrigo && abrigo.telefone
                ? ` ou pelo telefone ${abrigo.telefone}`
                : null}
            </span>
          </div>
        </div>
      </div>
    </MasterAbrigo>
  );
}
