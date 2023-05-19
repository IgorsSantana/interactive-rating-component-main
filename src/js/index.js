let pos = document.querySelector('.avaliable').value;

function avaliar(pos) {
    let av = document.querySelectorAll('.avaliable');
    let remove = document.querySelector('.selected');

    av[pos].classList.add('selected');
    remove.classList.remove('selected');
}

function submit() {
    let close = document.querySelector('#box1')
    let open = document.querySelector('#box2')
    let res = document.querySelector('#res')
    let num = document.querySelector('.selected').value

    close.classList.add('close')
    open.classList.remove('close')

    res.innerText = `You selected out ${num} of 5`
}