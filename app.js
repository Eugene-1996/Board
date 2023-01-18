const board = document.querySelector('#board')
const colors = ['red', 'black', 'white', 'grey', 'brown', 'blue']
const SQUARES_NUMBER = 450

for (let i = 0; i<SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)

    function setColor(element){
        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 100px ${color}` 
    }

    function removeColor(element){
        element.style.backgroundColor = 'green'  
        element.style.boxShadow = `0 0 10px green` 
    }

    function getRandomColor(){
        const index =  Math.floor(Math.random() * colors.length)
        return colors[index]
    }
}

