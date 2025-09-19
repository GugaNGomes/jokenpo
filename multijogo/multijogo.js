$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  var jogador1 = (document.getElementById("1").innerHTML =
    urlParams.get("jg1"));
  var jogador1 = (document.getElementById("2").innerHTML =
    urlParams.get("jg2"));
});

let escolhaEsquerda = "";
let escolhaDireita = "";

document.querySelector("body").onkeyup = (event) => {
  const tecla = event.key.toLowerCase();
  // Jogador da esquerda: A, S, D
  if (["a", "s", "d"].includes(tecla)) {
    escolhaEsquerda = tecla;
    document.getElementById(
      "Sataque"
    ).innerText = `Jogador Esquerda: ${tecla.toUpperCase()}`;
  }
  // Jogador da direita: 1, 2, 3
  if (["1", "2", "3"].includes(tecla)) {
    escolhaDireita = tecla;
    document.getElementById("Sataque").innerText = `Jogador Direita: ${tecla}`;
  }
  // Reiniciar rodada
  if (tecla === " ") {
    limpar();
  }
};

function limpar() {
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
  // Limpa a contagem anterior
  document.getElementById("segundos").innerText = "";
  escolhaEsquerda = "";
  escolhaDireita = "";
  document.getElementById("Sataque").innerText = "";
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
      // Exibe as escolhas finais dos jogadores
      let resultado = `Jogador Esquerda: ${
        escolhaEsquerda ? escolhaEsquerda.toUpperCase() : "Nenhuma"
      } | Jogador Direita: ${escolhaDireita ? escolhaDireita : "Nenhuma"}`;
      document.getElementById("Sataque").innerText = resultado;
      // Avalia o vencedor usando a lógica antiga
      if (escolhaEsquerda && escolhaDireita) {
        ganhador(parseInt(escolhaDireita), escolhaEsquerda);
      } else {
        // Mensagem de erro se algum jogador não escolheu
        const urlParams = new URLSearchParams(window.location.search);
        var jogador1 = urlParams.get("jg1");
        var jogador2 = urlParams.get("jg2");
        if (!escolhaEsquerda && !escolhaDireita) {
          alert(
            "jogador " + jogador1 + " e jogador " + jogador2 + " não atacaram"
          );
        } else if (!escolhaEsquerda) {
          alert("jogador " + jogador1 + " não atacou");
        } else {
          alert("jogador " + jogador2 + " não atacou");
        }
      }
    }
  }
  showCount();
}

function ataqueJogador1() {
  var tAtaques = document.getElementById("Sataque").innerHTML;
  var segundos = (document.getElementById("segundos").innerText = "");

  var numStr = tAtaques.replace(/[^0-9]/g, "");
  var Numero = numStr.toString().substring(0, 1);
  var string = tAtaques.split(/\d+/).toString();
  var at1 = "";
  const urlParams = new URLSearchParams(window.location.search);
  var jogador1 = urlParams.get("jg1");
  var jogador2 = urlParams.get("jg2");

  if (string.substring(0, 1) == ",") {
    at1 = string.substring(1, 2).toLowerCase();
  } else {
    at1 = string.substring(0, 1).toLowerCase();
  }

  if (Numero == "" || at1 == "") {
    if (Numero == "") {
      if (at1 == "") {
        alert(
          "jogador " + jogador1 + " e jogador " + jogador2 + " não atacaram"
        );
      } else {
        alert("jogador " + jogador2 + " não atacou");
      }
    } else {
      alert("jogador " + jogador1 + " não atacou");
    }
  } else {
    ganhador(Numero, at1);
  }
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
  if ((at1 == "a") & (Numero == 1)) {
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
  } else if ((at1 == "a") & (Numero == 2)) {
    console.log("jogador 2 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>" +
        jogador2 +
        " ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto2").innerText = String(p2 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "a") & (Numero == 3)) {
    console.log("jogador 1 gamhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>" +
        jogador1 +
        " ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PEDRA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto1").innerText = String(p1 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "s") & (Numero == 1)) {
    console.log("jogador 1 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>" +
        jogador1 +
        " ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto1").innerText = String(p1 + 1);
    }
    $("#segundos").first().after(html);
    console.log(element);
  } else if ((at1 == "s") & (Numero == 2)) {
    console.log("empate");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>empate</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
        "</div>" +
        "</div>";
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "s") & (Numero == 3)) {
    console.log("jogador 2 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>" +
        jogador2 +
        " ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../PAPEL D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../TESOURA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto2").innerText = String(p2 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "d") & (Numero == 1)) {
    console.log("jogador 2 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>" +
        jogador2 +
        " ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PEDRA D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto2").innerText = String(p2 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "d") & (Numero == 2)) {
    console.log("jogador 1 ganhou");
    for (var i = 0; i <= 0; i++) {
      html +=
        '<div id="result" class="result">' +
        "<p class='titulo'>" +
        jogador1 +
        " ganhou</p>" +
        '<div id="jogadas" class="jogadas">' +
        '<div class="jogada1e"><img src="../TESOURA D.png" alt=""></div>' +
        "<p>vs</p>" +
        '<div class="jogada1"><img src="../PAPEL D.png" alt=""></div>' +
        "</div>" +
        "</div>";
      document.getElementById("ponto1").innerText = String(p1 + 1);
    }
    $("#segundos").first().after(html);
  } else if ((at1 == "d") & (Numero == 3)) {
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
