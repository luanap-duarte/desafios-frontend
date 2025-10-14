// Seleciona o input de busca
const searchInput = document.getElementById('header-buscar');

// Quando o usuário interagir com o input, esta função será executada
searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value); //Armazena o valor do input

    const itens = document.querySelectorAll('.main-container .post'); 
    const nenhumResultado = document.getElementById('nenhum-resultado');
    let resultado = false;

    // IF para validar quando há valor no input
    if(value !== ''){
        itens.forEach(post =>{
            const titulo = post.querySelector('.titulo-post').textContent;
            const descricao = post.querySelector('.post-conteudo').textContent;

            // Validar o  valor digitado está contido nesse texto (título OU descrição)
            if (formatString(titulo).indexOf(value) !== -1 || formatString(descricao).indexOf(value) !== -1) {
                // Exibe o item
                post.style.display = 'block';
                // Indica que há resultados
                resultado = true;
            } else{
                 // Oculta o item
                post.style.display = 'none';
            }
        });
        //  Exibe ou oculta a mensagem "nenhum resultado"
        if(resultado){
            nenhumResultado.style.display = 'none';
        } else {
            nenhumResultado.style.display = 'block';
        }
    } else{
        // Sempre exibe todos os itens quando o input está vazio
        itens.forEach(post=> post.style.display = 'block');
        nenhumResultado.style.display = 'none';  // Oculta a mensagem "nenhum resultado"
    }
});
        
// Função para formatar strings
function formatString(value){
    return value.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// .trim() -> Remove espaços em branco
// .toUpperCase() -> Transforma em uppercase
// .normalize('NFD') -> Normaliza para separar os acentos
// .replace(/[\u0300-\u036f]/g, '') -> Remove os acentos




// Seleciona todos os ícones de curtir
const likeIcons = document.querySelectorAll('.curtir');

likeIcons.forEach(icon => {
// Seleciona todos os ícones de curtir
const likeIcons = document.querySelectorAll('.curtir');

likeIcons.forEach(icon => {
    let liked = false; // estado inicial

    icon.addEventListener('click', () => {
        liked = !liked; // alterna estado

        // muda a imagem de acordo com o estado
        icon.src = liked ? 'img/icon-heart-actived.svg' : 'img/icon-heart-desactived.svg';
    });
});

});
