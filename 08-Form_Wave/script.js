const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${ index * 25 }ms">${ letter }</span>`)
        .join('')
})