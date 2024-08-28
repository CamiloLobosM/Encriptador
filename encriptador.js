const d = document;
const textarea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".result__img");
const loaderCarga = d.querySelector(".loader");
const resultadoTitulo = d.querySelector (".result__title");
const resultadoText = d.querySelector (".result__text");
const botonEncriptar = d.querySelector (".form__btn");
const botonDesencriptar = d.querySelectorAll (".form__btn");
const botonCopiar = d.querySelector (".result__btn");

const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

function ecriptarmensaje(mensaje){
    let mensajeEncriptado = "";
  for(let i = 0; i < mensaje.length; i++){
    let letra = mensaje[i];
    let encriptada = letra;
    for(let j = 0;  j < llaves.length; j++){
        if (letra === llaves[j][0]) {
            encriptada = llaves[j][i];                    
        break;                                              
}
    }
    
mensajeEncriptado += encriptada;
  } 
  return mensajeEncriptado;
}


function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[1][0]);
    }
    return mensajeDesencriptado;
}

textarea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderCarga.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje.";
    resultadoText.textContent = "";
});


botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeEncriptado = ecriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es...";
});

botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    
});

botonCopiar.this.addEventListener('click', () =>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        loaderCarga.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
    })
    
})


