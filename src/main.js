import './css/main.css';

class Mensagem {
    bemVindo() {
        alert('Olá mundo');
    }

    texto() {
        return 'Tutorial Webpack 2';
    }
}

let mensagem = new Mensagem();
mensagem.bemVindo();
document.querySelector('.container').innerHTML = `<h1>${mensagem.texto()}</h1>`;