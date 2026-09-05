export function atualizarElementos(
    faixa,
    elementos,
    indice,
    espacamento = 0
) {
    const larguraElementos = elementos[0].clientWidth

    const distanciaFaixa = larguraElementos + espacamento

    faixa.style.transform =
        `translateX(${-indice * distanciaFaixa}px)`
}

export function configurarCarrosselInfinito(
    faixa,
    nextBotao,
    prevBotao,
    elementos,
) {
    let indice = 0
    const quantidadeElementos = elementos.length / 2

    function reset(novoindice) {
        faixa.style.transition = "none"

        indice = novoindice
        atualizarElementos(faixa, elementos, indice, 30)

        void faixa.offsetWidth

        faixa.style.transition = "transform 0.2s ease"
    }

    nextBotao.addEventListener("click", () => {
        if (indice >= quantidadeElementos) {
            reset(0)
        }

        indice++
        atualizarElementos(faixa, elementos, indice, 30)
    })

    prevBotao.addEventListener('click', () => {
        if (indice <= 0) {
            reset(quantidadeElementos)
        }

        indice--
        atualizarElementos(faixa, elementos, indice, 30)
    })
}

export function configurarCarrosselFinito(
    faixa,
    nextBotao,
    prevBotao,
    elementos,
) {
    let indice = 0

    nextBotao.addEventListener("click", () => {
        if (indice < 4) {
            indice++
            atualizarElementos(faixa, elementos, indice)
        }
    })

    prevBotao.addEventListener('click', () => {
        if (indice > 0) {
            indice--
            atualizarElementos(faixa, elementos, indice)
        }
    })
}