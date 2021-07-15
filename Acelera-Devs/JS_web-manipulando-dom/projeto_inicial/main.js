
import botaoConclui from "./componentes/concluiTarefa.js"

import botaoDeleta from "./componentes/deletaTarefa.js"

    const criarTarefa = (evento) => {

        evento.preventDefault()

        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const tarefa = document.createElement('li')
        tarefa.classList.add('task')

        const conteudo = `<p class="content">${valor}</p>`//cria um modelo de template-string para o parágrafo. ele interpola código html com o JS

        tarefa.innerHTML = conteudo

        tarefa.appendChild(botaoConclui())// Vai colocar o botão concluir dentro da nossa tarefa (LI) e ao cliclar ele executará a função botConclui

        tarefa.appendChild(botaoDeleta())

        lista.appendChild(tarefa)//vai sempre colcoar nossa tarefa ao final do nó

        input.value = " "

    }

    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)

   

       
    
