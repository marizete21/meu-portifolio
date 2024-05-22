var texto = "Maria Eduarda Nascimento";
var textoElemento = document.querySelector(".apresentacao_titulo_");
var atraso = 100;

var contadorDeLetras = 0;

function escreverTexto() {
    if(contadorDeLetras < texto.length){
        textoElemento.textContent += texto.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(escreverTexto,atraso);

    }
}
escreverTexto();


