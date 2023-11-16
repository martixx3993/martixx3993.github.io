
AOS.init();

let menu_bar = document.getElementById('menu_bar');
let menu = document.getElementById('menu');

menu_bar.addEventListener('cick', function() {
    menu.classList.toggle('show-menu');
})


document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}