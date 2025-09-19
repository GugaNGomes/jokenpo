// Permitir seleção por mouse
function selecionarAtaque(tecla) {
  escolha = tecla;
  document.getElementById(
    "Sataque"
  ).innerText = `Sua escolha: ${tecla.toUpperCase()}`;
  document.getElementById("pedra").style.border =
    tecla === "a" ? "4px solid #fb9433" : "0px";
  document.getElementById("papel").style.border =
    tecla === "s" ? "4px solid #fb9433" : "0px";
  document.getElementById("tesoura").style.border =
    tecla === "d" ? "4px solid #fb9433" : "0px";
}

document.getElementById("pedra").onclick = function () {
  selecionarAtaque("a");
};
document.getElementById("papel").onclick = function () {
  selecionarAtaque("s");
};
document.getElementById("tesoura").onclick = function () {
  selecionarAtaque("d");
};
function limpar() {
  document.getElementById("pedra").style.border = "0px ";
  document.getElementById("papel").style.border = "0px ";
  document.getElementById("tesoura").style.border = "0px ";
  var ataques = (document.getElementById("Sataque").innerText = "");
  var node = document.getElementById("result");
  if ($(".result").length) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
      time();
    }
  } else {
    time();
  }
}

function time() {
  // Reset visual
  document.getElementById("segundos").innerText = "";
  document.getElementById("Sataque").innerText = "";
  document.getElementById("pedra").style.border = "0px";
  document.getElementById("papel").style.border = "0px";
  document.getElementById("tesoura").style.border = "0px";

  let escolha = "";
  document.querySelector("body").onkeyup = (event) => {
    const tecla = event.key.toLowerCase();
    if (["a", "s", "d"].includes(tecla)) {
      escolha = tecla;
      document.getElementById(
        "Sataque"
      ).innerText = `Sua escolha: ${tecla.toUpperCase()}`;
      if (tecla === "a")
        document.getElementById("pedra").style.border = "4px solid #fb9433";
      else document.getElementById("pedra").style.border = "0px";
      if (tecla === "s")
        document.getElementById("papel").style.border = "4px solid #fb9433";
      else document.getElementById("papel").style.border = "0px";
      if (tecla === "d")
        document.getElementById("tesoura").style.border = "4px solid #fb9433";
      else document.getElementById("tesoura").style.border = "0px";
    }
  };

  let count = 1;
  const countdown = ["1", "2", "3", "JOKENPÔ!"];
  const segundos = document.getElementById("segundos");
  segundos.style.display = "block";
  segundos.style.fontSize = "80px";
  segundos.style.color = "#00c3ff";
  segundos.style.textShadow = "0 0 20px #00c3ff, 0 0 40px #ffff1c";

  function showCount() {
    if (count < countdown.length) {
      segundos.innerText = countdown[count - 1];
      segundos.animate(
        [
          { opacity: 0, transform: "scale(0.8)" },
          { opacity: 1, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        {
          duration: 400,
          fill: "forwards",
        }
      );
      count++;
      setTimeout(showCount, 700);
    } else {
      segundos.innerText = "";
      segundos.style.display = "none";
      // Chama ataqueJogador1 com a escolha feita
      ataqueJogador1(escolha);
    }
  }
  showCount();
}
function ataqueJogador1() {
  var tAtaques = document.getElementById("Sataque").innerHTML;
  var segundos = (document.getElementById("segundos").innerText = "");

  var string = tAtaques.split(/\d+/).toString();
  var at1 = "";

  if (string.substring(0, 1) == ",") {
    at1 = string.substring(1, 2).toLowerCase();
  } else {
    at1 = string.substring(0, 1).toLowerCase();
  }

  if (at1 == "") {
    alert("você não atacou");
  } else {
    sorteio(at1);
  }
}

function sorteio(at1) {
  var Numero = Math.floor(Math.random() * 3);
  switch (Numero) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
  }
  ganhador(Numero, at1);
  console.log(Numero);
}

function ganhador(Numero, at1) {
  console.log("Ganhador");
  console.log(at1 + Numero);
  const urlParams = new URLSearchParams(window.location.search);
  var jogador1 = urlParams.get("jg1");
  var jogador2 = urlParams.get("jg2");
  var ponto1 = document.getElementById("ponto1").innerText;
  var ponto2 = document.getElementById("ponto2").innerText;
  var p1 = parseInt(ponto1);
  var p2 = parseInt(ponto2);

  var html = "";

  if ((at1 == "a") & (Numero == 0)) {
    console.log("empate");
    {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>empate</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
        "</div>" +
        "</div>";

      $("#jokenpo").first().after(html);
    }
  } else if ((at1 == "a") & (Numero == 1)) {
    console.log("jogador 2 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'> Você perdeu</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto2").innerText = String(p2 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "a") & (Numero == 2)) {
    console.log("jogador 1 gamhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>Você ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto1").innerText = String(p1 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "s") & (Numero == 0)) {
    console.log("jogador 1 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>Você ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto1").innerText = String(p1 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "s") & (Numero == 1)) {
    console.log("empate");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        '<p class="titulo">empate</p>' +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
        "</div>" +
        "</div>";
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "s") & (Numero == 2)) {
    console.log("jogador 2 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>Você perdeu</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto2").innerText = String(p2 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "d") & (Numero == 0)) {
    console.log("jogador 2 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'> Você perdeu</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto2").innerText = String(p2 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "d") & (Numero == 1)) {
    console.log("jogador 1 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>Você ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto1").innerText = String(p1 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "d") & (Numero == 2)) {
    console.log("empate");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>empate</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
    }
    $("#segundos").first().after(html);
  }
}
