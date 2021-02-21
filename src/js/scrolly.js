
headerNode=document.querySelector('.header')

function handelScroll () {
  window.addEventListener('scroll', ()=>{
    posScrolly=window.scrollY
    if (posScrolly > 90){
      headerNode.classList.add("active")
    }
    else{
      headerNode.classList.remove("active")
    }
  }); 
}
handelScroll ()