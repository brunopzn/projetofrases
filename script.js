const main = document.querySelector('.main');
const box = document.querySelector('.box');
const textContent = document.querySelector('.textContent')
const h3 = document.querySelector('h3')



async function frases() {

    const res = await fetch('frases.json');
    const dados = await res.json();
    const frasesRandom = dados.sort(() => 0.5 - Math.random())

    frasesRandom.map(frase => {
        main.appendChild(box);
        box.appendChild(textContent);
        textContent.appendChild(h3);
        h3.innerHTML = frase;

    })


}

frases()


function gerarFrase() {

    frases()


}

