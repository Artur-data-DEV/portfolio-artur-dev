export const calcularIdade = (dataNascimento: string): number => {
  const dataAtual = new Date();
  const dataNasc = new Date(dataNascimento);
  if (isNaN(dataNasc.getTime())) {
    throw new Error("Data de nascimento inválida");
  }
  let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();
  const mesNasc = dataNasc.getMonth();
  const diaNasc = dataNasc.getDate();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }

  return idade;
};
