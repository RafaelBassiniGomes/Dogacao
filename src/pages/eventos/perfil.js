import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import eventoApi from '~/logicas/EventosApi';
import {
  listagemEventos,
  carregaEventoResponsavel,
} from '~/store/modules/evento/actions';

import MasterEvento from './masterEvento';
import { converteTextoHtml } from '~/logicas/Funcoes';

export default function Registro({ match }) {
  const profile = useSelector(state => state.user.profile);
  const [evento, setEvento] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadEvento() {
      const response = await eventoApi.listaEventoId(match.params.id);

      eventoApi.ConverteDatasEvento(response.data);

      setEvento(response.data);
    }
    loadEvento();
  }, [match.params.id]);
  let isResponsavel = false;

  if (
    evento &&
    profile &&
    evento.abrigo &&
    evento.abrigo.user_id === profile.id
  ) {
    isResponsavel = true;
    dispatch(carregaEventoResponsavel(evento));
  } else dispatch(listagemEventos(evento));

  return (
    <MasterEvento evento={evento} isResponsavel={isResponsavel}>
      <div className="col-lg-8 col-md-8 feed">
        <div className="row">
          <div className="col-xs-12 timeline">
            <article className="box padding-15 post">
              <header>
                <h2>
                  <span>
                    {evento.titulo} - {evento.data_evento}
                  </span>
                </h2>
                <address>
                  <strong>
                    <span>{evento.local}</span>
                  </strong>
                  <br />
                  <span>
                    {evento.endereco}, {evento.numero}{' '}
                  </span>
                  <br />
                  <span>
                    {evento.bairro}, {evento.cidade}, {evento.estado}
                  </span>
                  <br />
                </address>
                <p />
              </header>
              <div>
                {evento && evento.avatar ? (
                  <img
                    src={evento.avatar.url_600}
                    alt=""
                    className="img-responsive"
                  />
                ) : null}
              </div>
              <ul className="list-unstyled">
                <li id="corpoDasPaginas_cphEvento_liDescricao">
                  {evento.descricao
                    ? converteTextoHtml(evento.descricao)
                    : null}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </MasterEvento>
  );
}
