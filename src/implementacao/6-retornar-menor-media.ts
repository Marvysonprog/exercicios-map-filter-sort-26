import { Alunas, turma } from "../../listaPreConstruida";

function retornarMenorMedia(turma: Alunas): String {
    let nomeAlunaMenorMedia: String = ""

    const arrayMedias: number[] = turma.map((aluna) => {
        return ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3)
    })

    const arrayMediasOrdenado: number[] = arrayMedias.sort()

    const menorMedia: number = arrayMediasOrdenado[0]

    turma.filter((aluna) => {
        if (((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3) == menorMedia) {
            nomeAlunaMenorMedia = aluna.nome
        }
    })
    return nomeAlunaMenorMedia
}
console.log(retornarMenorMedia(turma))

