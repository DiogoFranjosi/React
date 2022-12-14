import {useState, useEffect} from 'react'

export default function Tarefas(){
    const [input, setInput] = useState('jogar bola')
    const [tarefas, setTarefas] = useState([
        'Estudar javaScript',

    ])


    useEffect(()=>{
        const tarefasStorage = localStorage.getItem('@tarefa')

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])


    useEffect(()=>{
        localStorage.setItem('@tarefas', JSON.stringify(tarefas))
    }, [tarefas])

    
    function registrar(event){
        //alert('tarefa registrada')
        event.preventDefault()
        setTarefas([...tarefas, input])
        setInput('')
    }



    return(

        <div>
            <h2>Tarefas</h2>
            <form  onSubmit={registrar}>

                <label> Nome da tarefa:</label>
                <input placeholder='Digite uma tarefa' value={input} onChange={(event)=> setInput(event.target.value)}/><br/>
                <button type="submit">Registrar</button>
            </form>
            <div>
                <ul>
                    {tarefas.map(tarefa =>(
                        <li key={tarefa}>{tarefa}</li>
                    ))}

                </ul>
            </div>
        </div>
    )
}