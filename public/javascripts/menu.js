const nav = document.querySelector('.header .menuMobile')

const toggle = document.querySelectorAll('header nav .toggle')

console.log(nav)

for (const i of toggle) {
    i.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('.menu a')

for(const link of links){
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}