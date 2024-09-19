import { Alunas, turma } from "../../listaPreConstruida";

function retornarMediaTurma(turma: Alunas): number {
  let valorAcumulado: number = 0;

  const arrayDeMedia: number[] = turma.map(
    (aluna) => (aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3
  );

  arrayDeMedia.map((media) => (valorAcumulado += media));
  
  const mediaDaTurma: number = parseFloat(
    (valorAcumulado / arrayDeMedia.length).toFixed(1)
  );

  return mediaDaTurma;
}
console.log(retornarMediaTurma(turma));
