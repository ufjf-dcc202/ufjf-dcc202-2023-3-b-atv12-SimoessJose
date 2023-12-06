const olJoao = document.querySelector("ol#joao");
const olMaria = document.querySelector("ol#maria");

document.entrada.addEventListener('submit', leFormulario);

atualizaTela();

function leFormulario(event){

    event.preventDefault();
    const quantidade = document.entrada.quantidade.value;
    valueAsNumber;
    const fruta = document.entrada.fruta.value;
    const origin = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);

    function atualizaTela(){
        const estoque = getEstoque();
        preencheLista(olJoao, estoque.joao);
        preencheLista(olMaria, estoque.maria);

    }

    function preencheLista (lista, estoque) {
        lista.innerHTML = "";
        for(let i=0; i<estoqueDaPessoa.length; i++){
            const monte = estoqueDaPessoa[i];
            const li = document.createElement('li');
            li.textContent = `${monte.tipo}: ${monte.qtd}`;
            lista.append(li);
        }

    }

}