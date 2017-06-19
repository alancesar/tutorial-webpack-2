import './css/main.css';

class Mensagem {
    bemVindo() {
        document.write('<h1>Olá mundo!</h1>');
    }

    texto() {
        return 'Tutorial Webpack 2';
    }
}

let mensagem = new Mensagem();
mensagem.bemVindo();
