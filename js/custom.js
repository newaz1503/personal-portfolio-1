//sticky navbar
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20){
            $('#header').addClass('sticky')
        }else{
            $('#header').removeClass('sticky')
        }
        //scroll btn show
        if (this.scrollY > 200) {
            $('.scroll-up').addClass('show')
        }else{
            $('.scroll-up').removeClass('show')
        }
    })
})

//Click to scroll up
$('.scroll-up').click(function () {
    $('html').animate({scrollTop:0})
})

//menu toggle
$(document).ready(function () {
    $('.navbar .menu-bar').click(function () {
       $('.navbar ul.menu').toggleClass('active')
    })
})

//typing animation
let typed = new Typed('.typing',{
    strings: ["Web Designer", "Web Developer", "Wordpress Customizer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

})
let typed1 = new Typed('.typing-1',{
    strings: ["Web Designer", "Web Developer", "Wordpress Customizer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

})

