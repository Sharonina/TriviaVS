//Colocar el nombre del input en etiqueta
const usuario = document.querySelector('.usuario')

const setNewUserName = () => {
    const nombre = window.localStorage.getItem('nombre')
    usuario.innerHTML = nombre
}

const getResults = () => {
    const correctAnswers = ["op2", "op4", "op1"]
    const userAnswers = []
    let correctAnswersCount = 0

    userAnswers.push(window.localStorage.getItem("respuesta1"))
    userAnswers.push(window.localStorage.getItem("respuesta2"))
    userAnswers.push(window.localStorage.getItem("respuesta3"))

    correctAnswers.forEach((answer, index) => {
        if(answer === userAnswers[index]){
            correctAnswersCount++
        }
    })

    const answersContainer = document.getElementById('resultados')
    answersContainer.innerHTML = `Tuviste ${correctAnswersCount} respuestas correctas`
}

const onLoad = () => {
    setNewUserName()
    getResults()
}

const clearStorage = () => {
    window.localStorage.clear()
}

window.addEventListener('load', onLoad())