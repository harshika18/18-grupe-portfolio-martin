// header import
// hero import
// about import

/* <----- header -----> */
const burgerDOM = document.querySelector('header .mob-menu-icon');
    const menuDOM = document.querySelector('body .menu');
    const hedDOM = document.querySelector('.header');
    //
    burgerDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
  
            menuDOM.classList.toggle('show');
    
    //jeigu buvo paspausta yra true, o jeigu true tuomet remove show
    
    });
/* kai scrolini pasikeicia header fonas */
    const activDOM = document.querySelector('.header');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
            activDOM.classList.add("active");
        } else{
            activDOM.classList.remove("active");
        }
    };




/* <----- hero -----> */

/* <----- about me -----> */

/* <----- my services -----> */

/* <----- my resume -----> */

/* <----- hire me -----> */

/* <----- my portfolio -----> */

/* <----- testimonials -----> */

/* <----- my blogs -----> */

/* <----- contact me -----> */

/* <----- footer -----> */

// header logic
// hero logic
// about logic