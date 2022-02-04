const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

let counter = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const style = e.currentTarget.classList;
        if (style.contains('dec')) {
            counter--;
        } else if (style.contains('inc')) {
            counter++;
        } else {
            counter = 0;
        }
        if (counter < 0) {
            value.style.color = 'red';
        } 
        if(counter > 0){
            value.style.color = 'green';
        }
        if (counter === 0) {
            value.style.color = 'rgb(64, 96, 97)';
        }
        value.innerHTML = counter;
    })
})
