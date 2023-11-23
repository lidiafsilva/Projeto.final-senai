// Quando o usuário rolar a página em 20px do topo do documento, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltar-ao-topo").style.display = "block";
  } else {
    document.getElementById("voltar-ao-topo").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role suavemente para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}