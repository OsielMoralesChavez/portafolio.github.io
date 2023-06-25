var nav=document.querySelector('nav');
    window.addEventListener('scroll', function(){
       if(window.pageYOffset > 100){
        nav.classList.add('bg-dark', 'shadow');
       }else{
        nav.classList.remove('bg-dark', 'shadow')
       }
    })

 /*----------------scroll-------------------------*/ 

   ScrollReveal({
       reset: true,
       distance:'80px',
       duration: 2000,
       delay: 400
      });

      ScrollReveal().reveal('.texto, h2, .container, .estudios ', { origin:'top'});
      ScrollReveal().reveal('.imagen', { origin: 'bottom' });
      ScrollReveal().reveal('h1, .imagen2', { origin: 'left' });

 /*----------------Multiple text-------------------------*/ 
    const typed = new Typed('.multiple-text',{
        strings:['Frontend', 'Marketing Digital', 'SEO', 'KPI'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });