const mensaje = document.getElementById('texto');
const salidaTexto = document.querySelector('.mensaje-final')
const encriptar = document.querySelector('.encriptar')
const desencriptar = document.querySelector('.desencriptar');
const copiar = document.querySelector('.copiar')
let mensajeFinal
const objeto1 = {
    'a' : 'abwx',
    'e' : 'eds',
    'i' : 'imaf',
    'o' : 'owd',
    'u' : 'ucax'
}
const objeto2 = {
    'abwx':'a',
    'eds':'e',
    'imaf':'i',
    'owd':'o' ,
    'ucax':'u'
}
function mostrarMensajeEncriptado(){
     mensajeFinal = mensaje.value.replace(/[aeiou]/gi,function (match){
        return objeto1[match.toLowerCase()]
    })

    salidaTexto.innerHTML = mensajeFinal
}
function desencriptarTexto(texto){
    const patrones = Object.keys(objeto2).join('|');
    const expresionRegular = new RegExp(patrones, 'g');
    return texto.replace(expresionRegular, (match) => objeto2[match]);
}
function mostrarMensajeDesencriptado(){
    mensajeFinal = desencriptarTexto(mensaje.value)

    salidaTexto.innerHTML = mensajeFinal
}
function copiarTexto(){
    const copia = salidaTexto.textContent
    navigator.clipboard.writeText(copia)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar el texto: ', error);
        });
    alert('TEXTO COPIADO')
}
encriptar.addEventListener('click', mostrarMensajeEncriptado)
copiar.addEventListener('click',copiarTexto)
desencriptar.addEventListener('click',mostrarMensajeDesencriptado)