let notas = [];
let soma = 0;
let quantidade = 0;
let textoLista = "";

function trocaVirgula(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === ",") {
      resultado = resultado + ".";
    } else {
      resultado = resultado + texto[i];
    }
  }

  return resultado;
}

function adicionarNota() {
  let campo = document.getElementById("nota");
  let valorRecebido = campo.value; 

  if (valorRecebido === "") {
    alert("Por favor, insira uma nota.");
    return;
  }

  let valorStr = trocaVirgula(valorRecebido);
  let valor = Number(valorStr);

  if (isNaN(valor) || valor < 0 || valor > 10) {
    alert("A nota digitada é inválida, por favor, insira uma nota válida.");
    return;
  }
  
  notas.push(valor);
  soma = soma + valor;
  quantidade = quantidade + 1;
  textoLista = textoLista + "A nota " + quantidade + " foi " + valor + "\n";
  document.getElementById("lista").innerText = textoLista;
  campo.value = "";
}

function calculaMedia() {
  let saida = document.getElementById("media");

  if (quantidade === 0) {
    saida.innerText = "A média é:";
    return;
  }

  let media = soma / quantidade;
  saida.innerText = "A média é: " + media.toFixed(2);
}

let botaoAdicionar = document.getElementById("botaoAdiciona");
botaoAdicionar.addEventListener("click", adicionarNota);
let botaoCalcular = document.getElementById("botaoCalcula");
botaoCalcular.addEventListener("click", calculaMedia);