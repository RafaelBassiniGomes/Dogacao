const opSexo = [
  { id: 'M', title: 'Masculino' },
  { id: 'F', title: 'Feminino' },
];

export function ListaSexo() {
  return opSexo;
}
export function getDcrSexo(id) {
  let titulo = '';
  switch (id) {
    case 'M':
      titulo = 'Masculino';
      break;
    case 'F':
      titulo = 'Feminino';
      break;
    default:
      break;
  }
  return titulo;
}

const opMoraEm = [{ id: 1, title: 'Apartamento' }, { id: 2, title: 'Casa' }];

export function ListaMoraEm() {
  return opMoraEm;
}

export function getDcrMoraEm(id) {
  let titulo = '';
  switch (id) {
    case 1:
      titulo = 'Apartamento';
      break;
    case 2:
      titulo = 'Casa';
      break;
    default:
      break;
  }
  return titulo;
}

const opTipoMoradia = [
  { id: 1, title: 'Próprio' },
  { id: 2, title: 'Aluguel' },
  { id: 3, title: 'Com Parentes' },
  { id: 4, title: 'Com Amigos' },
];

export function ListaTipoMoradia() {
  return opTipoMoradia;
}

export function getDcrTipoMoradia(id) {
  let titulo = '';
  switch (id) {
    case 1:
      titulo = 'Próprio';
      break;
    case 2:
      titulo = 'Aluguel';
      break;
    case 3:
      titulo = 'Com Parentes';
      break;
    case 4:
      titulo = 'Com Amigos';
      break;
    default:
      break;
  }
  return titulo;
}

const opEstadoCivil = [
  { id: 1, title: 'Casado' },
  { id: 2, title: 'Divorciado' },
  { id: 3, title: 'Separado' },
  { id: 4, title: 'Solteiro' },
  { id: 5, title: 'Viúvo' },
];

export function ListaEstadoCivil() {
  return opEstadoCivil;
}
export function getDcrEstadoCivil(id) {
  let titulo = '';
  switch (id) {
    case 1:
      titulo = 'Casado';
      break;
    case 2:
      titulo = 'Divorciado';
      break;
    case 3:
      titulo = 'Separado';
      break;
    case 4:
      titulo = 'Solteiro';
      break;
    case 5:
      titulo = 'Viúvo';
      break;
    default:
      break;
  }
  return titulo;
}

const opEnergia = [
  { id: 1, title: 'Muito Baixa' },
  { id: 2, title: 'Baixa' },
  { id: 3, title: 'Média' },
  { id: 4, title: 'Alta' },
  { id: 5, title: 'Muito Alta' },
];

export function ListaEnergia() {
  return opEnergia;
}

export function getDcrEnergia(id) {
  let titulo = '';
  switch (id) {
    case 1:
      titulo = 'Muito Baixa';
      break;
    case 2:
      titulo = 'Baixa';
      break;
    case 3:
      titulo = 'Média';
      break;
    case 4:
      titulo = 'Alta';
      break;
    case 5:
      titulo = 'Muito Alta';
      break;
    default:
      break;
  }
  return titulo;
}

const opStatus = [
  { id: 'P', title: 'Pendente' },
  { id: 'A', title: 'Aprovado' },
  { id: 'R', title: 'Reprovado' },
];
export function ListaStatus() {
  return opStatus;
}

export function getDcrStatus(id) {
  let titulo = '';
  switch (id) {
    case 'P':
      titulo = 'Pendente';
      break;
    case 'A':
      titulo = 'Aprovado';
      break;
    case 'R':
      titulo = 'Reprovado';
      break;
    default:
      break;
  }
  return titulo;
}
