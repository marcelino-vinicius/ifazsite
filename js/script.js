const mediaMobile = window.matchMedia("(max-width: 768px)");

// ===== MENU HAMBÚRGUER =====

const areaPrincipal = document.querySelector("main");
const botaoMenu = document.getElementById("btn-menu");
const iconeMenu = botaoMenu.querySelector("i");
const menuMobile = document.getElementById("navbar");
const linksMenu = menuMobile.querySelectorAll("a");

function controlarDesfoque(elemento) {
    elemento.classList.toggle("desfoque");
}

function controlarMenu(botaoMenu) {
    if (iconeMenu.classList.contains("fa-bars")) {
        iconeMenu.classList.replace("fa-bars", "fa-x");

        botaoMenu.setAttribute("aria-expanded", "true");
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    } else {
        iconeMenu.classList.replace("fa-x", "fa-bars");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }

    controlarDesfoque(areaPrincipal);

    menuMobile.classList.toggle("active");
}

function fecharMenu() {
    if (!mediaMobile.matches) { return; }

    iconeMenu.classList.replace("fa-x", "fa-bars");

    controlarDesfoque(areaPrincipal);

    menuMobile.classList.remove("active");
}

botaoMenu.addEventListener("click", function () { controlarMenu(this); });

linksMenu.forEach(link => {
    link.addEventListener("click", fecharMenu);
});

mediaMobile.addEventListener("change", (e) => {
    if (!e.matches) {
        menuMobile.classList.remove("active");
        areaPrincipal.classList.remove("unfocus");

        iconeMenu.classList.replace("fa-x", "fa-bars");
    }
});


// ===== CONFIGURAÇÃO DE CARROSSÉIS =====

function atualizarElementos(
    faixa,
    elementos,
    index
) {
    const WIDTH = elementos[0].clientWidth;
    const DISTANCIA = faixa.classList.contains("faixa-projetos")
        ? WIDTH
        : WIDTH + 30;

    faixa.style.transform =
        `translateX(${-index * DISTANCIA}px)`;
}

function configurarCarrossel(
    faixa,
    nextBotao,
    prevBotao,
    elementos
) {
    let index = 0;
    const metade = elementos.length / 2;

    function reset(novoIndex) {
        faixa.style.transition = "none";

        index = novoIndex;
        atualizarElementos(faixa, elementos, index);

        void faixa.offsetWidth;

        faixa.style.transition = "transform 0.2s ease";
    }

    nextBotao.addEventListener("click", () => {
        if (index >= metade) {
            reset(0);
        }

        index++;
        atualizarElementos(faixa, elementos, index);
    })

    prevBotao.addEventListener('click', () => {
        if (index <= 0) {
            reset(elementos.length / 2);
        }

        index--;
        atualizarElementos(faixa, elementos, index);
    });
}

// ===== CARROSSEL DE PROJETOS =====

const faixaProjetos = document.querySelector(".faixa-projetos");
const nextProjeto = document.getElementById("next-projeto");
const prevProjeto = document.getElementById("prev-projeto");
const projetos = document.querySelectorAll(".projeto");

configurarCarrossel(
    faixaProjetos,
    nextProjeto,
    prevProjeto,
    projetos
);

let intervaloCarrossel;

function iniciarCarrossel() {
    clearInterval(intervaloCarrossel);

    intervaloCarrossel = setInterval(() => {
        nextProjeto.click();
    }, 10000);
}

function pararCarrossel() {
    clearInterval(intervaloCarrossel);
}

const projetosContainer = document.getElementById("projetos-container");

projetosContainer.addEventListener("focusin", () => {
    pararCarrossel();
});

projetosContainer.addEventListener("focusout", (evento) => {
    if (!projetosContainer.contains(evento.relatedTarget)) {
        iniciarCarrossel();
    }
});

// ===== CARROSSEL DA EQUIPE =====

const faixaMembros = document.querySelector(".faixa-equipe");
const nextMembro = document.getElementById("next-membro");
const prevMembro = document.getElementById("prev-membro");
const membros = faixaMembros.querySelectorAll(".membro");

configurarCarrossel(faixaMembros, nextMembro, prevMembro, membros);

// ===== FOCAR SERVIÇOS =====

const servicos = document.querySelectorAll(".servico");

servicos.forEach(servico => {
    servico.addEventListener("focus", () => {
        servico.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// ===== ÁREA DE CONTATO =====

const submitButton = document.querySelector("#contato button");

submitButton.addEventListener("click", () => {
    console.log("Enviou");
})