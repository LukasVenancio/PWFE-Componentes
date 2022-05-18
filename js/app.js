'use strict'

const readStudents = async() =>{

    const url = 'https://testeleonid.herokuapp.com/alunos'

    const response = await fetch(url)
    const data = await response.json()

    return data

}

const createCards = ({nome, turma, status, foto}) =>{

    const card = document.createElement('card-aluno')
    card.setAttribute('data-name', nome)
    card.setAttribute('data-turma', turma)
    card.setAttribute('data-status', status)
    card.setAttribute('data-image', foto)
              
    return card

}

const loadStudents = async() =>{

    const container = document.getElementById('container-cards')

    const students = await readStudents()

    const cards = students.map(createCards)

    container.replaceChildren(...cards)


}

loadStudents()