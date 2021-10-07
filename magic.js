var scrollup = document.querySelector('.scroll-up');
var Nav = document.querySelector('nav');
var autor = document.querySelector('.autor-img');
var autorH = document.querySelector('.autor-h');
var autorP = document.querySelector('.autor-p');
window.addEventListener('scroll', function(){
    var scrolled = this.scrollY;
    if(scrolled > 200){
        scrollup.style.opacity = '1'
        scrollup.style.top = '90%'
    }else{
        scrollup.style.opacity = '0'
        scrollup.style.top = '0%'
      
     
    }
});

window.addEventListener('scroll', function(){
    var  scrolli = this.scrollY;
    if(scrolli > 460){
        autor.style.marginLeft = '0'
        autorH.style.marginTop = '0'
        autorH.style.opacity = '1'
        autorH.style.transition = '1s'
        autorH.style.marginTop = '0%'
        autor.style.opacity = '1'
        autor.style.transition = '1s'
        autorP.style.opacity = '1'
        autorP.style.marginTop = '0%'
        autorP.style.transition = '1.5s'
    }else{
        autor.style.marginLeft = '-50%'
        autorH.style.marginTop = '-20%'
        autorH.style.opacity = '0'
        autor.style.opacity = '0'
        autorP.style.opacity = '0'
        autorP.style.marginTop = '50%'
    }
})

window.addEventListener('scroll', function(){
    var secScrolled = this.scrollY;
    if(secScrolled > 900){
        Nav.style.height = '100px'
        Nav.style.transition = '0.5s'
        Nav.style.background = 'rgba(0,0,0,0.5)'
    }else{
        Nav.style.height = '80px'
        Nav.style.background = 'black'
    }
})

scrollup.addEventListener('click', function(){
     window.scrollTo(0, 0),
         scrollbehivior = 'smooth'
})


var prjh = document.querySelector('.prjh');
var prjp = document.querySelector('.prjp');


window.addEventListener('scroll', function(){
    var secdScrolled = this.scrollY;
    if(secdScrolled > 850){
         prjh.style.marginLeft = '0%'
         prjh.style.opacity = '1'
         prjh.style.transition = '1s'
        
         prjp.style.marginLeft = '0%'
         prjp.style.opacity = '1'
         prjp.style.transition = '1s'

    }else{
        prjh.style.marginLeft = '50%'
        prjh.style.opacity = '0'    

        prjp.style.marginLeft = '-50%'
        prjp.style.opacity = '0'    
    }
})


var projects = document.querySelector('.projects-1');

window.addEventListener('scroll', function(){
    var scrollCrd = this.scrollY;
    if(scrollCrd > 1200){
      projects.style.left = '0';
      projects.style.opacity = '1';
      projects.style.transition = '1s';
    }else{
      projects.style.left = '-9%';
      projects.style.opacity = '0';
    }
})


var projectss = document.querySelector('.projects-2');

window.addEventListener('scroll', function(){
    var scrollCrd = this.scrollY;
    if(scrollCrd > 1550){
        projectss.style.left = '5%';
      projectss.style.opacity = '1';
      projectss.style.transition = '1s';
    }else{
        projectss.style.left = '9%';
      projectss.style.opacity = '0';
    }
})


