import { Alunas, turma } from "../../listaPreConstruida";

function retornarAprovadas(turma: Alunas): String[] {
  const vetorDeAprovadas: Alunas = turma.filter(
    (aluna) => (aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3 >= 7
  );

  const nomeAprovadas: String [] = vetorDeAprovadas.map((aprovada) => aprovada.nome);

  return nomeAprovadas;
}
console.log(retornarAprovadas(turma));
