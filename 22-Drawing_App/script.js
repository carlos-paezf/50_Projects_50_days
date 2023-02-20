const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeElement = document.getElementById('size')
const colorElement = document.getElementById('color')
const clearElement = document.getElementById('clear')


const context = canvas.getContext('2d')


let size = 10
let isPressed = false
colorElement.value = 'black'
let color = colorElement.value
let x, y


canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})


document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})


canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})


function drawCircle (x, y) {
    context.beginPath()
    context.arc(x, y, size, 0, Math.PI * 2)
    context.fillStyle = color
    context.fill()
}


function drawLine (x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stokeStyle = color
    context.lineWidth = size * 2
    context.stoke()
}


function updateSizeOnScreen () {
    sizeElement.innerText = size
}


increaseBtn.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})


decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})


colorElement.addEventListener('change', (e) => color = e.target.value)


clearElement.addEventListener('click', () => context.clearRect(0, 0, canvas.width, canvas.height))