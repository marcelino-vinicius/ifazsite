import { configurarCarrosselInfinito } from "./carrossel.js"


const faixaProjetos = document.querySelector(".faixa-projetos")
const nextProjeto = document.querySelector("#next-projeto")
const prevProjeto = document.querySelector("#prev-projeto")
const projetos = document.querySelectorAll(".projeto")

configurarCarrosselInfinito(
    faixaProjetos,
    nextProjeto,
    prevProjeto,
    projetos,
)


// ===== CONFIGURAR CARROSSEL AUTOMÁTICO =====

let intervaloCarrossel

function iniciarCarrossel() {
    clearInterval(intervaloCarrossel)

    intervaloCarrossel = setInterval(() => {
        nextProjeto.click()
    }, 8000)
}

function pararCarrossel() {
    clearInterval(intervaloCarrossel)
}

const projetosContainer = document.querySelector("#projetos-container")

projetosContainer.addEventListener("focusin", () => {
    pararCarrossel()
})

projetosContainer.addEventListener("focusout", (evento) => {
    if (!projetosContainer.contains(evento.relatedTarget)) {
        iniciarCarrossel()
    }
})