function ajustarRolagem(elementos, posicao) {
    elementos.forEach(elemento => {
        elemento.addEventListener("focus", () => {
            elemento.scrollIntoView({
                behavior: "smooth",
                block: posicao
            })
        })
    })
}

const servicos = document.querySelectorAll(".servico")
const botoesControle = document.querySelectorAll(".prev-btn, .next-btn")

ajustarRolagem(servicos, "start")
ajustarRolagem(botoesControle, "center")