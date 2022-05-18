'use strict'

class card extends HTMLElement {

    constructor(){

        super()
        this.build()

    }

    build(){
        
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.creatCard())
    
    }

    styles(){

        const style = document.createElement('style')
        style.textContent = `
            
        .card{
            width: ${this.setWidht()};
            height: ${this.setHeight()};
            background-color: ${this.bgcolor()};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
        .card-text{
            width: 50%;
            padding: 4px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 0 2px #000000;
        }
        .card-image{
            background-color: #ffffff;
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background-image: url(${this.setImage()});
            background-size: cover;
            box-shadow: inset 0 0 5px #000000;
        }`

        return style
    }

    creatCard(){

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card-text">${this.setName()}</div>
            <div class="card-image"></div>
            <div class="card-text">${this.setTurma()}</div>`
        
        return card
    
    }

    bgcolor(){

        const color = this.getAttribute('data-bgcolor') ?? 'tomato'

        return color
    }

    setWidht(){
        
        const widht = this.getAttribute('data-widht') ?? '250px'

        const intWidht = parseInt(widht)

        if(intWidht > 100 && intWidht <= 400 ){
            return intWidht + 'px'
        
        }else{
            return '250px'
        }

        
    }

    setHeight(){

        const height = this.getAttribute('data-height') ?? '250px'

        const intHeight = parseInt(height)

        if(intHeight > 100 && intHeight <= 400 ){
            return intHeight + 'px'
        
        }else{
            return '250px'
        }

    }

    setImage(){
        
        const image = this.getAttribute('data-image') ?? './2.png'

        return image
    }

    setName(){
        
        const name = this.getAttribute('data-name') ?? 'Aluno'

        if(name.length <= 15 ){
            return name
        
        }else{
            return 'Aluno'
        }

        
    }

    setTurma(){

        const turma = this.getAttribute('data-turma') ?? 'DS2T'

        if(turma.length <= 15){
            return turma
        
        }else{
            return 'DS2T'
        }
    }

}

customElements.define('card-aluno', card)