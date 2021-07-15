const botaoConclui = () => {
    const botConclui = document.createElement('button')

    botConclui.classList.add('checkbutton')//chamamos o método add e criamos a classe checkbutton

    botConclui.innerText = 'concluir'//a propriedade innertext vai representar o conteúdo do texto rederizado no botão. Vai ser o texto que mostrará no botão.

    botConclui.addEventListener('click', concluirTarefa) // a função concluirTarefa será usada como referência na execução do click do botão

    return botConclui

}

const concluirTarefa = (evento) => {//o evento é do click

    const botaoConclui = evento.target// passa qual o alvo do clicado, ou seja, ou vou descobrir qual foi o elemento clicado

    const tarefaCompleta = botaoConclui.parentElement
    // crio uma variável para pegar o pai do elemento. No caso o pai é a Li. 

    tarefaCompleta.classList.toggle('done')//o Toogle executar a classe do CSS a partir o momento do click e vai dar o efeito de rabisco em cima da tarefa
}
export default botaoConclui