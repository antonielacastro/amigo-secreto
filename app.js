let amigos = [];


function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        inputNome.value = '';
        atualizarLista();
    } else {
        alert('Digite um nome válido!');
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigosecreto() {
    if (amigos.length > 0) {
        const indexSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indexSorteado];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`; 
    } else {
        alert('Adicione pelo meno um amigo para sortear!');
    }
}
