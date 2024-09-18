import { Alunas, turma } from "../../listaPreConstruida";

function retornarMaiorMedia(turma: Alunas): String {
  let maiorMedia: number = 0;
  let nomeAlunaMaiorMedia: String = "";

  const arrayDeMedia: void [] = turma.map((aluna) => {
    const media: number =
      (aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3;

    if (media > maiorMedia) {
      maiorMedia = media;
      nomeAlunaMaiorMedia = aluna.nome
    }

  });

  return nomeAlunaMaiorMedia;
}
console.log(retornarMaiorMedia(turma));
