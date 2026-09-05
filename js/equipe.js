import { configurarCarrosselFinito } from "./carrossel.js"


const carrosselEquipe = document.querySelector("#carrossel-equipe")
const faixaMembros = document.querySelector(".faixa-equipe")
const nextMembro = document.querySelector("#next-membro")
const prevMembro = document.querySelector("#prev-membro")
const membros = faixaMembros.querySelectorAll(".membro")

configurarCarrosselFinito(
    faixaMembros,
    nextMembro,
    prevMembro,
    membros,
)


// ===== DEFINIR TAMANHO DOS MEMBROS =====

let tamanhoMembro = (carrosselEquipe.offsetWidth - 90) / 4

if (tamanhoMembro <= 225) { tamanhoMembro = 225 }

membros.forEach(membro => {
    membro.style.width = tamanhoMembro + "px"
})