var botaoCriptografar = document.querySelector(".botaoCriptografar");
var botaoDescriptografar = document.querySelector(".botaoDescriptografar");
var avatar = document.querySelector(".containerBoneco");
var containerMensagem = document.querySelector(".containerMensagem");
var resultado = document.querySelector(".textoResultado");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar() {
    ocultar();
    var primeiroTexto = recuperarTexto();
    resultado.textContent = criptografarTexto(primeiroTexto);
}

function descriptografar() {
    ocultar();
    var primeiroTexto = recuperarTexto();
    resultado.textContent = descriptografarTexto(primeiroTexto);
}


function recuperarTexto(){
    var primeiroTexto = document.querySelector(".primeiroTexto");
    return primeiroTexto.value
}

function ocultar (){
    avatar.classList.add("ocultar");
    containerMensagem.classList.add("ocultar");
}

function criptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function descriptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;
}

const botaoCopiar = document.querySelector(".botaoCopiar");
botaoCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(conteudo);
});
