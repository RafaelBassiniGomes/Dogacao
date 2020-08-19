import React from 'react';
import imgNotFound from '~/assets/img/PageNotFound.jpg';

export default function NotFound() {
  return (
    <div className="container corpo feed">
      <header className="filtro">
        <div className="row">
          <div className="col-md-12 col-lg-12 ">
            <div className="row" align="center">
              <img src={imgNotFound} alt="" className="img-responsive" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
