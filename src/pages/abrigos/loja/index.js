import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import abrigosApi from '~/logicas/AbrigosApi';
import produtosApi from '~/logicas/ProdutosApi';
import logo from '~/assets/abrigosemlogo.jpg';

import { Content, Body } from '../styles';

import MasterAbrigo from '../masterAbrigo';
import {
  listagemSlug,
  carregaAbrigoResponsavel,
} from '~/store/modules/abrigo/actions';

export default function Index({ match }) {
  const profile = useSelector(state => state.user.profile);
  const abrigoSalvo = useSelector(state => state.abrigo.perfil);
  const [abrigo, setAbrigo] = useState(abrigoSalvo);
  const [produtos, setProdutos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProdutos() {
      const response = await abrigosApi.listaAbrigos();
      const vAbrigo = response.data.find(a => a.slug === match.params.slug);

      setAbrigo(vAbrigo);

      const response2 = await produtosApi.listaProdutosAbrigo(vAbrigo.id);

      setProdutos(response2.data);
    }
    loadProdutos();
  }, [match.params.slug]);

  let isResponsavel = false;
  if (abrigo && profile && abrigo.user && abrigo.user.id === profile.id) {
    isResponsavel = true;
    dispatch(carregaAbrigoResponsavel(abrigo));
  } else dispatch(listagemSlug(abrigo));

  return (
    <MasterAbrigo abrigo={abrigo} isResponsavel={isResponsavel}>
      <div className="col-lg-9 col-md-8 materia">
        <header className="filtro">
          <div className="row">
            <div className="col-md-12 col-lg-12 ">
              <div className="row">
                <div className="col-md-9">
                  {isResponsavel ? (
                    <Link to="/produtos/Novo" className="btn btn-primary">
                      Cadastrar Produto
                    </Link>
                  ) : (
                    <span>
                      A Loja serve apenas como uma Vitrine Virtual, para
                      realizar a compra entre em contato pelo e-mail&nbsp;
                      {abrigo.email}
                    </span>
                  )}
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
              {produtos
                ? produtos.map(produto => (
                    <div className=" col-lg-4 col-xs-12">
                      <ul>
                        <br />
                        <Content>
                          <Link to={`/loja/${produto.id}`}>
                            <img
                              src={
                                produto.avatar ? produto.avatar.url_300 : logo
                              }
                              alt=""
                            />
                          </Link>
                          <Body>
                            <label1>
                              <Link to={`/produtos/${produto.id}`}>
                                {produto.nome}
                                <br />
                                R$ {produto.preco}
                              </Link>
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
