const options = [
  { id: '1', title: 'Muito Baixo' },
  { id: '2', title: 'Baixo' },
  { id: '3', title: 'Médio' },
  { id: '4', title: 'Alto' },
  { id: '5', title: 'Muito Alto' },
];

export function ListaPerfilAnimal() {
  return options;
}

const opSexo = [
  { id: '', title: '(Nenhum)' },
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

const opCastrado = [{ id: 1, title: 'Sim' }, { id: 0, title: 'Não' }];

export function ListaCastrado() {
  return opCastrado;
}
export function getDcrCastrado(id) {
  if (id) return 'Sim';
  return 'Não';
}

const opPorte = [
  { id: '', title: '(Nenhum)' },
  { id: '1', title: 'Pequeno' },
  { id: '2', title: 'Médio' },
  { id: '3', title: 'Grande' },
];

export function ListaPorte() {
  return opPorte;
}

export function getDcrPorte(id) {
  let titulo = '';
  switch (id) {
    case 1:
      titulo = 'Pequeno';
      break;
    case 2:
      titulo = 'Médio';
      break;
    case 3:
      titulo = 'Grande';
      break;
    default:
      break;
  }
  return titulo;
}

const opTipo = [
  { id: '1', title: 'Cachorro' },
  { id: '2', title: 'Gato' },
  { id: '3', title: 'Outros' },
];

export function ListaTipo() {
  return opTipo;
}
