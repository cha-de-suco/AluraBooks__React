import styled from "styled-components"
import { useState } from "react"

const PesquisaContainer = styled.section`
   
    .pesquisa {
        color: white;
        text-align:center;
    }

    .pesquisa__titulo {
        font-size: 38px;
        font-weight: bold;
        margin-bottom: 7px;
    }

    .pesquisa__subtitulo {
        margin-top: 7px;
    }
        
    .pesquisa__input {
        border: 1px solid #FFF;
        background: transparent;
        border: 1px solid #FFF;
        height: 12px;
        padding: 20px 140px;
        border-radius: 50px;
        width: 370px;
        color: #FFF;
        font-size: 16px;
        text-align:center;
        margin-bottom: 10px;

        &::placeholder {
            text-align:center;
            color: #FFF;
            font-size: 16px;
        }
    }
`

function Pesquisa () {
    const [ textoDigitado, setTextDigitado ] = useState('')
    return (
        <PesquisaContainer>
            <section className="pesquisa">
                <h2 className="pesquisa__titulo">Já sabe por onde começar?</h2>
                <h3 className="pesquisa__subtitulo">Descubra em nossa coleção tudo o que você precisa para o seu crescimento!</h3>
                <input  placeholder="Qual sua próxima leitura?" className='pesquisa__input'  onBlur={ event => setTextDigitado(event.target.value)} />
                <p>{ textoDigitado }</p>
            </section>
        </PesquisaContainer>
    )
}

export default Pesquisa