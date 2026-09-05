const mediaMobile = window.matchMedia("(max-width: 768px)")

const conteudoPrincipal = document.querySelector("main")
const botaoMenu = document.querySelector("#btn-menu")
const iconeMenu = botaoMenu.querySelector("i")
const menuMobile = document.querySelector("#navbar")
const linksMenu = menuMobile.querySelectorAll("a")


function controlarEstadoMenu(ativo) {
    iconeMenu.classList.toggle("fa-bars", !ativo)
    iconeMenu.classList.toggle("fa-x", ativo)

    botaoMenu.setAttribute("aria-expanded", ativo)
    botaoMenu.setAttribute("aria-label", ativo ? "Fechar menu" : "Abrir menu")

    conteudoPrincipal.classList.toggle("desfoque", ativo)
    menuMobile.classList.toggle("active", ativo)
}

function alternarMenu() {
    let estadoMenu = menuMobile.classList.contains("active")

    controlarEstadoMenu(!estadoMenu)
}

function fecharMenu() {
    if (!mediaMobile.matches) return

    controlarEstadoMenu(false)
}

botaoMenu.addEventListener("click", alternarMenu)

linksMenu.forEach(link => {
    link.addEventListener("click", fecharMenu)
})

mediaMobile.addEventListener("change", (e) => {
    if (!e.matches) { controlarEstadoMenu(false) }
})