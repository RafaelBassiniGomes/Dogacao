import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Select } from '@rocketseat/unform';
import abrigosApi from '~/logicas/AbrigosApi';
import logo from '~/assets/abrigosemlogo.jpg';
import { calculaIdade } from '../../logicas/Funcoes';
import { Content, Body } from './styles';

import MasterAbrigo from './masterAbrigo';
import {
  listagemSlug,
  carregaAbrigoResponsavel,
} from '~/store/modules/abrigo/actions';
import {
  ListaPorte,
  ListaSexo,
  getDcrPorte,
  getDcrSexo,
} from '~/components/PerfilAnimal';

function searchFor(porte, sexo) {
  return function(x) {
    return (
      (x.porte === parseInt(porte.porte) || !porte.porte) &&
      (x.sexo === sexo.sexo || !sexo.sexo)
    );
  };
}

export default function CasosAbrigos({ match }) {
  const profile = useSelector(state => state.user.profile);
  const [abrigo, setAbrigo] = useState([]);
  const [casos, setCasos] = useState([]);
  const [sexo, setSexo] = useState('');
  const [porte, setPorte] = useState('');

  const dispatch = useDispatch();

  const listaPorte = new ListaPorte();
  const listaSexo = new ListaSexo();

  useEffect(() => {
    async function loadAbrigos() {
      const response = await abrigosApi.listaAbrigos();
      const vAbrigo = response.data.find(a => a.slug === match.params.slug);

      setAbrigo(vAbrigo);

      const response2 = await abrigosApi.listaCasosAbrigo(vAbrigo.id);

      setCasos(response2.data);
    }
    loadAbrigos();
  }, [match.params.slug]);
  let isResponsavel = false;
  if (abrigo && profile && abrigo.user && abrigo.user.id === profile.id) {
    isResponsavel = true;
    dispatch(carregaAbrigoResponsavel(abrigo));
  } else dispatch(listagemSlug(abrigo));

  function onChangeSexo(e) {
    setSexo(e.target.value);
  }
  function onChangePorte(e) {
    setPorte(e.target.value);
  }

  return (
    <MasterAbrigo abrigo={abrigo} isResponsavel={isResponsavel}>
      <div className="col-lg-9 col-md-8 materia">
        <header className="filtro">
          <div className="row">
            <div className="col-md-12 col-lg-12 ">
              <div className="row">
                <div className="col-md-3">
                  {isResponsavel ? (
                    <Link to="/casos/Novo" className="btn btn-primary">
                      Cadastrar
                    </Link>
                  ) : null}
                </div>
                <div className="col-md-3">
                  <label htmlFor="exampleInput4">Porte</label>
                  <br />
                  <Select
                    name="porte"
                    options={listaPorte}
                    onChange={onChangePorte}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="exampleInput4">Sexo</label>
                  <br />
                  <Select
                    name="sexo"
                    options={listaSexo}
                    onChange={onChangeSexo}
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-12">
              <hr />
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col-md-12 col-lg-12 timeline">
            <div className="row">
              {casos
                ? casos.filter(searchFor({ porte }, { sexo })).map(caso => (
                    <div className=" col-lg-4 col-xs-12">
                      <ul>
                        <br />
                        <Content>
                          <Link to={`/casos/${caso.id}`}>
                            <img
                              src={caso.avatar ? caso.avatar.url_300 : logo}
                              alt=""
                            />
                          </Link>
                          <Body>
                            <label2>
                              <Link to={`/casos/${caso.id}`}>{caso.nome}</Link>
                            </label2>
                            <label1>
                              <br />
                              Porte: {getDcrPorte(caso.porte)}
                              <br />
                              Sexo: {getDcrSexo(caso.sexo)}
                              <br />
                              Idade: {calculaIdade(caso.data_nascimento)}
                            </label1>
                          </Body>
                        </Content>
                      </ul>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </MasterAbrigo>
  );
}
