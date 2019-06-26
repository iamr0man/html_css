const btn = document.createElement('button');
const headline = document.querySelectorAll('.headline');
const container = document.querySelectorAll('.container');

btn.innerText = 'Change Theme';
btn.className = 'change-color-btn';
document.body.appendChild(btn);

window.onload = function checkLocal(){

    if(localStorage.getItem('color')){
        headline.forEach(e => e.style.color  = localStorage.getItem('color'));
        container.forEach(e => e.style.backgroundColor  = localStorage.getItem('backgroundColor'));
    }    
}

btn.addEventListener('click', changeTheme);

function changeTheme() {
    const current = getComputedStyle(headline.item(0));
    const blue_text = 'rgb(24, 180, 207)';
    if (current.color === blue_text) {
        headline.forEach(e => e.style.color  = '#f2f2f2');
        container.forEach(e => e.style.backgroundColor = blue_text);
        localStorage.setItem('color', '#f2f2f2')
        localStorage.setItem('backgroundColor', blue_text)
    } else {
        headline.forEach(e => e.style.color = blue_text);
        container.forEach(e => e.style.backgroundColor = '#f2f2f2');
        localStorage.setItem('color', blue_text)
        localStorage.setItem('backgroundColor', '#f2f2f2')
    }
}