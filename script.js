const textcript = document.querySelector(".mainTexto");
const mensaje = document.querySelector(".textoEncriptado");
const copyText = document.querySelector("btnCopiar");
const no = document.querySelector("noMensaje");
const ingresa = document.querySelector("ingresaText");

document.getElementById("copy-div").style.display = "none";
document.getElementById("textocript").style.display = "none";

function btnEncriptar() {
    const textoEncriptado = encriptar(textcript.value)
    if (textoEncriptado.trim().length === 0) {
        swal("Ingrese un mensaje para encriptar");

        return;
      }
    else {
    mensaje.value = textoEncriptado;
    textcript.value = "";
    esconder()
      }
}

function esconder() {
    document.getElementById("asideB").style.display = "none";
    document.getElementById("copy-div").style.display = "flex";
    document.getElementById("textocript").style.display = "flex";

}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }


    }
    return stringEncriptada
    
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textcript.value)
    if (textoEncriptado.trim().length === 0) {
        swal("Ingrese un mensaje para encriptar");
        return;
      }
    mensaje.value = textoEncriptado;
    textcript.value = "";
    esconder();
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }


    }
    return stringDesencriptada 
}

function copiar() {
    var copyText = document.getElementById("textocript");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    }
