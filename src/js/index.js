const BotaoAlterarTema = document.getElementById("Botao-Alterar-Tema");
const Body = document.querySelector("body");
const ImagemBotaoTrocaTema = document.querySelector(".Imagem-Botao");

BotaoAlterarTema.addEventListener("click", () => {
    const ModoEscuroAtivo = Body.classList.contains("Modo-Escuro");
    Body.classList.toggle("Modo-Escuro");
    if (ModoEscuroAtivo) {
        ImagemBotaoTrocaTema.setAttribute("src", "./src/images/sun.png");
    }
    else {
        ImagemBotaoTrocaTema.setAttribute("src", "./src/images/moon.png");
    }
});