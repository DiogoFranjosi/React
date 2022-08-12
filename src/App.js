import React from 'react'
import Primeiro from './Components/Primeiro'
import Cartao from './Components/Cartao'
import Numeros from './Components/Numeros'
import Comparametro from './Components/Comparametro'
import Fragmento from './Components/Fragmento'
import './app.css'
import Foto from './Components/Foto'
import Imagem from './Imagem/Teste.webp'
import listaFuncio from './Components/listaFuncio'
import ListaFuncio from './Components/listaFuncio'
import Nome from './Components/Nome'
import Formulário from './Components/Formulário'
import Tarefas from './Components/Tarefas'

export default function App(){
    return(
        <div className='App'>
                <h1>Fundamentos React</h1>
        <div className='Cards'>

        <Cartao titulo='Tarefas' color='Blue'>
                <Tarefas/>
                </Cartao>

        <Cartao titulo='Manipulando Formulário' color='Green'>
                <Formulário/>
                </Cartao>


        <Cartao titulo='Nome' color='Red'>
                <Nome/>

            </Cartao>



            <Cartao titulo='Lista' color='grey'>
                <ListaFuncio/>

            </Cartao>

            <Cartao titulo='Imagem em React' color='#00FFFF'>
                <Foto img={Imagem} />
            </Cartao>





        <Cartao titulo='Números aleatórios' color='#00ff00'>
            <Numeros  min={10} max={100}/>
        </Cartao>

<Cartao titulo='teste'></Cartao>

        <Cartao titulo='Primeiro componente com props' color='blue'>
            <Comparametro titulo='Hoje é quarta-feira' subtitulo='03/08/2022'/>
        </Cartao>

        <Cartao titulo='Primeiro componente com props' color='yellow'>
            <Comparametro titulo='Aula de React' subtitulo='Parametros' />
            </Cartao>
<Cartao titulo='Primeiro componente com props' color='green'>
            <Comparametro titulo='titulo teste'/>
        </Cartao>

        <Cartao titulo='Utilizando React.Fragment' color='#ffcbdb'>
            <Fragmento/>
        </Cartao> 
        </div>
        </div>
    
    )
}