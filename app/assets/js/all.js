const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const headerlink = document.querySelectorAll('.nav li a')
const pagenation = document.querySelectorAll('.pagenation li')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburgerActive');
  nav.classList.toggle('navActive');

})
pagenation.forEach((item, index) => {
  item.addEventListener('click', function(e) {
    e.preventDefault()

    if(index === 0 || index === (pagenation.length - 1)){
      return
    } else {
      pagenation.forEach((j,k)=>{
        if (Number(this.firstChild.innerText) === k) {
          this.classList.add('pagenationFocus')
          console.log('move')
        } else {
          console.log('test')
          j.classList.remove('pagenationFocus')
        }
      })
    }
  } )
})
