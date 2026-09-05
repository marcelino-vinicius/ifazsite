import { configurarCarrosselFinito } from "./carrossel.js"


const carrosselEquipe = document.querySelector("#carrossel-equipe")
const faixaMembros = document.querySelector(".faixa-equipe")
const nextMembro = document.querySelector("#next-membro")
const prevMembro = document.querySelector("#prev-membro")
const membros = faixaMembros.querySelectorAll(".membro")


// ===== DEFINIR TAMANHO DOS MEMBROS =====

const larguraCarrossel = carrosselEquipe.offsetWidth;

let colunas = 4

if (larguraCarrossel < 550) {
    colunas = 1
} else if (larguraCarrossel < 800) {
    colunas = 2
} else if (larguraCarrossel < 900) {
    colunas = 3
}

const maxIndice = 8 - colunas
const totalGap = 30 * (colunas - 1)
const tamanhoMembro = (larguraCarrossel - totalGap) / colunas

membros.forEach(membro => {
    membro.style.width = tamanhoMembro + "px"
})

configurarCarrosselFinito(
    faixaMembros,
    nextMembro,
    prevMembro,
    membros,
    maxIndice
)