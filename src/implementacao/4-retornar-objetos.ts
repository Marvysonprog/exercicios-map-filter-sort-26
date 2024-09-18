import { Alunas, turma } from "../../listaPreConstruida";

interface AprovadasEReprovadas {
    nome: String;
    media: Number;
    aprovada: Boolean;
}

function retornarObjetos(turma: Alunas): AprovadasEReprovadas[] {

    const arrayMedias: Array<AprovadasEReprovadas> = turma.map((aluna) => {

        let media: number = parseFloat(((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(1))

        let status: boolean = false

        if (media >= 7) {
            status = true
        }

        let objeto:AprovadasEReprovadas = {
            nome: aluna.nome,
            media: media,
            aprovada: status
        }

        return objeto

    })

   return arrayMedias

}
console.log(retornarObjetos(turma))