import { Alunas, turma } from "../../listaPreConstruida";

function retornarReprovadas(turma: Alunas): String[] {
  const reprovadas: Alunas = turma.filter(
    (reprovada) => (reprovada.prova.p1 + reprovada.prova.p2 + reprovada.prova.p3) / 3 < 7
  );

  const nomesReprovadas = reprovadas.map((reprovada) => reprovada.nome);

  return nomesReprovadas;
}
console.log(retornarReprovadas(turma));
