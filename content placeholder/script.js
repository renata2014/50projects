const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.anitamed-bg-text');

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1502&q=80" alt=""/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, recusandae?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/5.jpg" alt="">'
    name.innerHTML = 'Lucy Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg-text.forEach(bg => bg.classList.remove('animated-bg-text'))
}