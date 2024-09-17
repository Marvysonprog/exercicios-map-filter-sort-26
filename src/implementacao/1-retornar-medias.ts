
import { Alunas, turma } from "../../listaPreConstruida";

function retornarMedias(turma: Alunas): Array<number> {

    const medias :number[] = turma.map((item) =>
        parseFloat(((item.prova.p1 + item.prova.p2 + item.prova.p3) / 3).toFixed(1)))

    return medias
}
console.log(retornarMedias(turma));