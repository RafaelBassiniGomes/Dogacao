import React from 'react';

import MasterInstitucional from './masterInstitucional';

export default function QuemSomos() {
  return (
    <MasterInstitucional>
      <div className="col-lg-9 col-md-8 materia">
        <div className="row">
          <div className="col-xs-12 timeline">
            <h2>Quem somos</h2>
            <p>
              Segundo a OMS, o Brasil tem 30 milhões de animais vivendo nas
              ruas! Foi pensando nisso que criamos o DogAcao.
            </p>

            <p>
              Nosso objetivo é dar visibilidade ao trabalho dos abrigos e
              voluntários, auxiliar na divulgação e acompanhamento dos casos de
              resgate, além de sensibilizar a população sobre a importância da
              adoção e de contribuições para a causa a fim de amenizar a
              situação de tantos animais.
            </p>

            <p>
              Nessa primeira versão estamos disponibilizando os cadastros de
              abrigos e casos, mas a ideia é a criação de um portal onde
              poderemos controlar quem são os verdadeiros voluntários, pontuando
              quem realiza resgates e trata de nossos bichinhos.
            </p>
          </div>
        </div>
      </div>
    </MasterInstitucional>
  );
}
