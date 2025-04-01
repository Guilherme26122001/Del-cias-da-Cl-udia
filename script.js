// Função para abrir a imagem em tela cheia
function abrirImagem(img) {
    var lightbox = document.getElementById("lightbox");
    var imagemGrande = document.getElementById("imagemGrande");

    imagemGrande.src = img.src; // Pega o caminho da imagem clicada
    lightbox.style.display = "flex"; // Mostra o lightbox
}

// Função para fechar a imagem
function fecharImagem() {
    document.getElementById("lightbox").style.display = "none";
}
