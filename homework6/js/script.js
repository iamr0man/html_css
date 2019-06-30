// const btn = document.createElement('button');
// btn.innerText = 'Change Theme';
// btn.className = 'change-color-btn'
// document.body.appendChild(btn);

// window.onload = function checkLocal(){
//     if(localStorage.length>0){
//         children.href = localStorage.getItem("theme");
//     }    
// }
// btn.addEventListener('click', changeTheme);

// function changeTheme(){
//     if(localStorage.length===0){
//         localStorage.setItem("theme", 'css/newTheme.css')
//         window.location.reload();
//     } else {
//         localStorage.clear();
//         window.location.reload();
//     }
// }

const $btn = $('.to-top-btn');

$(document).scroll(function(e){

    let $clientHeight = $(window).innerHeight();
    if($(window).scrollTop() > $clientHeight){
        $btn.fadeIn();
    } else {
        $btn.fadeOut();
    }
});

$btn.click(function(){
    $('html').animate({
        scrollTop: 0
    }, 500)
})

$('.hide-content-btn').click(function(){
    $('#block-hot-news').slideToggle(600);
})