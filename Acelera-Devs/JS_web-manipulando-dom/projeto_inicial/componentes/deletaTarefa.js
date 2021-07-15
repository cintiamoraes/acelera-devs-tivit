const botaoDeleta = () => {
    const botaoDeleta = document.createElement('button')//criamos o botão
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'deletar'//colocamos o texto dentro do botão através do inner Text
    botaoDeleta.addEventListener('click', deletarTarefa) 
        //colocamo o evento de click no botão            
        return botaoDeleta                    
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()
    return botaoDeleta

}

export default botaoDeleta