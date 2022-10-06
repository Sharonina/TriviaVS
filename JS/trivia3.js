//Colocar el nombre del input en etiqueta
const usuario = document.querySelector('.usuario')

const setNewUserName = () => {
    const nombre = window.localStorage.getItem('nombre')
    usuario.innerHTML = nombre
}

window.addEventListener('load', setNewUserName())

//respuesta correcta
const onOptionSelected = (respuesta) => {
    window.localStorage.setItem("respuesta3", respuesta)
    window.location.replace('resultados.html')
}