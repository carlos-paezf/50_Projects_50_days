const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const generateElement = document.getElementById('generate')
const clipboardElement = document.getElementById('clipboard')


const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


clipboardElement.addEventListener('click', () => {
    const password = resultElement.innerText
    if (!password) return

    navigator.clipboard.writeText(password)

    alert('Password copied to clipboard!')
})


generateElement.addEventListener('click', () => {
    const length = +lengthElement.value
    const hasLower = lowercaseElement.checked
    const hasUpper = uppercaseElement.checked
    const hasNumber = numbersElement.checked
    const hasSymbol = symbolsElement.checked

    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})


function generatePassword (lower, upper, number, symbol, length) {
    let generatePassword = ''

    const typesCount = lower + upper + number + symbol
    const typesArr = [ { lower }, { upper }, { number }, { symbol } ].filter(item => Object.values(item)[ 0 ])

    if (typesCount === 0) return ''

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const functionName = Object.keys(type)[ 0 ]
            generatePassword += randomFunction[ functionName ]()
        })
    }

    const finalPassword = generatePassword.slice(0, length)

    return finalPassword
}


function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 27) + 65)
}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol () {
    const symbols = '!@#$%&*(){}[]=<>/,.'
    return symbols[ Math.floor(Math.random() * symbols.length) ]
}