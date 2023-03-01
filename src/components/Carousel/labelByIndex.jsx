export const labels = [
  'Baixar plataforma',
  'Configurar plataforma',
  'Fazer depósito',
  'Fazer resgate'
];

const labelByIndex = (index) => labels[index % labels.length];

export default labelByIndex;