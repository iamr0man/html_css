let children = document.head.children[3];

const btn = document.createElement('button');
btn.innerText = 'Change Theme';
btn.className = 'change-color-btn'
document.body.appendChild(btn);

window.onload = function checkLocal(){
    if(localStorage.length>0){
        children.href = localStorage.getItem("theme");
    }    
}
btn.addEventListener('click', changeTheme);

function changeTheme(){
        if(localStorage.length===0){
        localStorage.setItem("theme", 'css/newTheme.css')
        window.location.reload();
    } else {
        localStorage.clear();
        window.location.reload();
    }
}