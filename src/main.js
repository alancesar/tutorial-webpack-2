import './css/main.css';

class Mensagem {
    bemVindo() {
        document.write('<h1>Olá mundo!</h1>');
    }
}

let mensagem = new Mensagem();
mensagem.bemVindo();
