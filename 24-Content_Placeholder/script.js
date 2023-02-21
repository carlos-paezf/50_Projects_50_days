const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgText = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)


function getData () {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Lorem Ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    // profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />'
    profileImg.innerHTML = '<img src="https://github.com/fluidicon.png" alt="" />'
    name.innerHTML = 'David Ferrer'
    date.innerHTML = 'Feb 21, 2023'

    animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animatedBgText.forEach((bg) => bg.classList.remove('animated-bg-text'))
}