
const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`//cria um modelo de template-string para o parágrafo. ele interpola código html com o JS

    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)//vai sempre colcoar nossa tarefaao final do nó
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

const botaoConclui = () => {
    const botConclui = document.createElement('button')

    botConclui.classList.add('checkbutton')//chamamos o método add e criamos a classe checkbutton
    botConclui.innerText = 'concluir'//a propriedade innertext vai representar o conteúdo do texto. Vai ser o texto que mostrará quando eu clicar no botão. 

    botConclui.addEventListener('click', ()=> {
       
    console.log("fui clicado")

})

return botConclui

}
