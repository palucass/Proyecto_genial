let btn_Menu = document.getElementById("bttn_menu");
let menu = document.getElementById("menu");
btn_Menu.addEventListener("click", function(){
    "use string";
    menu.classList.toggle("mostrar");
})

var elementTop = $('nav').offset().top;

$(window).scroll(function(){
    if ($(window).scrollTop() >= elementTop){
        $('body').addClass('nav_fixed');
    }else{
        $('body').removeClass('nav_fixed');
    }
});

