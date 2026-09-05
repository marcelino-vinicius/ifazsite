const formulario = document.querySelector("form")

formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    console.log("Formulário enviado!")
});