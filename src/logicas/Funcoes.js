import React from 'react';
import { formatDistance, parseISO } from 'date-fns';
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';

export function formatDate(data) {
  const timeZone = 'pt-Br';

  return format(utcToZonedTime(data, timeZone), 'dd/MM/yyyy', {
    timeZone,
  });
}

export function formatNumber(numero) {
  const formatado = new Intl.NumberFormat('pt-Br').format(numero);
  return formatado;
}

export function calculaIdade(data) {
  if (!data.includes('/')) data = formatDate(data);
  const dia = data.split('/')[0];
  const mes = data.split('/')[1];
  const ano = data.split('/')[2];

  const dataRelativa = zonedTimeToUtc(
    parseISO(`${ano}-${`0${mes}`.slice(-2)}-${`0${dia}`.slice(-2)}`),
    'America/Sao_Paulo'
  );
  return formatDistance(dataRelativa, new Date(), {
    locale: pt,
    addSuffix: false,
  });
}

export function converteTextoHtml(texto) {
  return texto.split('\n').map((item, key) => {
    return (
      <span key={key}>
        {item} <br />
      </span>
    );
  });
}
