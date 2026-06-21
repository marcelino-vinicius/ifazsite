const mediaMobile = window.matchMedia("(max-width: 768px)");

// Menu hambúrguer

const areaPrincipal = document.querySelector("main");
const botaoMenu = document.getElementById("btn-mobile");
const iconeMenu = botaoMenu.querySelector("i");
const menuMobile = document.getElementById("navbar");
const linksMenu = document.querySelectorAll("#menu a");

function controlarDesfoque(elemento) {
    elemento.classList.toggle("desfoque");
}

function controlarMenu(botaoMenu) {
    if (iconeMenu.classList.contains("fa-bars")) {
        iconeMenu.classList.replace("fa-bars", "fa-x");
    } else {
        iconeMenu.classList.replace("fa-x", "fa-bars");
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
        areaPrincipal.classList.remove("desfoque");

        iconeMenu.classList.replace("fa-x", "fa-bars");
    }
});

// Carrossel de projetos

const faixa = document.getElementById('faixa');
const nexbutton = document.getElementById('next-btn');
const prevbutton = document.getElementById('prev-btn');
const projetos = document.querySelectorAll('.projeto');

let index = 0;

function updateCarrossel() {
    const width = projetos[0].clientWidth;
    faixa.style.transform = `translateX(${-index * width}px)`;

}

nexbutton.addEventListener('click', () => {
    index++;
    if (index > projetos.length - 1) {
        index = 0;
    }
    updateCarrossel();
})

prevbutton.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = projetos.length - 1;
    }
    updateCarrossel();
})

setInterval(() => { nexbutton.click(); }, 10000); // Poderia simular o clique com: nextbutton.click()


//-------------------------------------- AREA DE CONTATO 

// ------ BOTAO

const submitButton = document.querySelectorAll('[type="submit"]')

submitButton.addEventListener('click', () => {
    console.log("ENVIOU")
})