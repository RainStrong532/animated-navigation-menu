const menu = $(".navigation ul");
const toggle = $(".navigation ul .menu");

toggle.on("click", function(){
    if(menu.hasClass("active")){
        menu.removeClass("active");
    }else{
        menu.addClass("active");
    }
})