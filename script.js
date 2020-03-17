//Função para abrir links
function abrirLink(url) {
  window.open(url);
}



//Função do evento "clck" principal
var contador = 0;

function botaoQuaseInutil() {
  var hoje = new Date();
  var horas = hoje.getHours();
  var minutos = hoje.getMinutes();
  if(horas != 1 && minutos != 1){
    alert("Neste momento são " + horas + " horas e " + minutos + " minutos.");
  } else if(horas == 1 && minutos != 1){
    alert("Neste momento é " + horas + " hora e " + minutos + " minutos.");
  } else if(horas != 1 && minutos == 1) {
    alert("Neste momento são " + horas + " horas e " + minutos + " minuto.");
  } else {
      alert("Neste momento é " + horas + " hora e " + minutos + " minuto.");
  }
  contador++;
  if (contador == 1) {
    document.getElementById("vezesVerificado").innerHTML = 'Você verificou o horário ' + contador + ' vez.';
    document.getElementById("textoTooltip").innerHTML = 'Agora você sabe!';
  } else {
    document.getElementById("vezesVerificado").innerHTML = 'Você verificou o horário ' + contador + ' vezes.';
  };
  if (contador >= 2 && contador <= 4) {
    document.getElementById("textoTooltip").innerHTML = 'Tente apertar a tecla L'
    document.getElementById("lenda").innerHTML = 'Lendas dizem que se o botão for apertado mais ' + ((contador - 5) *-1) + ' vezes, algo acontecerá!';
  }
  if (contador == 5) {
    document.getElementById("textoTooltip").innerHTML = 'Será que este é o fim?'
    document.getElementById("lenda").innerHTML = 'Viu? Algo aconteceu! Você desbloqueou o Dark Mode!';
    document.getElementById('body').style.backgroundColor = '#1a1a1a';
    document.getElementById('body').style.color = '#fff';
    document.getElementById('myModal').style.color = '#000';
  }
  if (contador == 6) {
    document.getElementById("textoTooltip").innerHTML = 'Continue clickando...'
  }
  if (contador == 8) {
    document.getElementById("lenda").innerHTML = 'Você parece estar se divertindo apertando este botão praticamente inútil.';
  }
  if (contador == 9) {
    document.getElementById("lenda").innerHTML = 'Não posso te culpar, nesses tempos de corona virus, é difícil achar o que fazer.';
  }
  if (contador == 10) {
    document.getElementById("lenda").innerHTML = 'Vou tentar te ajudar, aperte mais uma vez pra ter uma maneira ainda melhor de disperdiçar seu tempo.';
  }
  if (contador == 11) {
    abrirLink("https://theuselessweb.com/");
    document.getElementById("lenda").innerHTML = 'O site que você acabou de abrir serviu de referência para esse aqui.';
  }
  if (contador == 12) {
    document.getElementById("textoTooltip").innerHTML = 'Agora sim é o fim...';
    document.getElementById("lenda").innerHTML = 'Fico lisonjeado de você ter voltado, mas infelizmente este foi o fim do coteúdo do site!';
  }
  if (contador == 13) {
    document.getElementById("lenda").innerHTML = 'Muito obrigado pela participação!';
  }
  if (contador == 20) {
    abrirLink("https://knowyourmeme.com/memes/2019-20-coronavirus-outbreak/photos/trending");
  }
};



// Fuções dos eventos "mousedown" e "mouseup"
function botaoApertar(){
  document.getElementById('botao').style.backgroundColor = '#f43325';
  document.getElementById('botao').style.boxShadow = '0 5px #790e06';
  document.getElementById('botao').style.transform = 'translateY(4px)';
};

function botaoSoltar(){
  document.getElementById('botao').style.backgroundColor = '#f5493d';
  document.getElementById('botao').style.boxShadow = '0 9px #aa1409';
  document.getElementById('botao').style.transform = 'translateY(0px)';
};



// Função dos eventos "mouseover"	"mouseout" para a Tooltip do botão
function tooltipAparecer(){
  document.getElementById("textoTooltip").style.visibility = "visible"
  document.getElementById("textoTooltip").style.opacity = "0.8"
};

function tooltipDesaparecer(){
  document.getElementById("textoTooltip").style.visibility = "hidden"
  document.getElementById("textoTooltip").style.opacity = "0"
};



// Função do evento "keydown" da tecla 'L'
document.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key;

    if (key === 'L' || key === 'l') {
        botaoApertar();
    }
});


// Função do evento "keyup" da tecla 'L'
document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key;

    if (key === 'L' || key === 'l') {
        botaoQuaseInutil();
        botaoSoltar();
    }
});


// Changelog, originalmente a intenção era usar o evento "load"

// Inserir conteúdo no modal
var modal = document.getElementById("myModal");

var img = document.getElementById("linkChangelog");
img.onclick = function(){
  modal.style.display = "block";
}

// Fechar o modal com 'X'
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// Abrir modal assim que a página é carregada
window.onload = function(){
   setTimeout(function(){
      img.onclick();
   },500);
};

window.onload()
