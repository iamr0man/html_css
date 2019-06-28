const btn = document.createElement('button');
btn.innerText = 'Change Theme';
btn.className = 'change-color-btn'
document.body.appendChild(btn);

const headline = document.querySelectorAll('.headline');
const container = document.querySelectorAll('.container');

window.onload = function checkLocal(){

    if(localStorage.getItem('color')){
        headline.forEach(e => e.style.color  = localStorage.getItem('color'));
        container.forEach(e => e.style.backgroundColor  = localStorage.getItem('backgroundColor'));
    }    
}

btn.addEventListener('click', changeTheme);

let isNewTheme = false;

function changeTheme(){

    if(!isNewTheme) {
        document.head.children[3].href = 'css/newTheme.css';
        isNewTheme = true;
    } else {
        document.head.children[3].href = 'css/style.css';
        isNewTheme = false;
    }
}