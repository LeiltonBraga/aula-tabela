const botaMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)')

botaMostrarProjetos.addEventListener('click',() => {
    mostrariMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaMostrarProjetos.classList.add('remover');
}

function mostrariMaisProjetos() {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo');
    });
}

