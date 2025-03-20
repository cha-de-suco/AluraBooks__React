import styled from "styled-components"
import { useState } from "react"
import { livros } from "./dadosPesquisa.js"

const PesquisaContainer = styled.section`
   
    .pesquisa {
        align-items:center;
        color: white;
        display: flex;
        flex-direction: column;
        gap:10px;
        justify-content:center;
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
        height: 4px;
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

    .card {
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
        border-radius: 7px;
        border-left: 5px  solid  #1d4ed8;
        border-bottom: 3px  solid #1d4ed8;
        height: 461px;
        padding: 0;
        width: 237px;
    }
        
    .card__conteudo {
        background: linear-gradient(to right, #64748b, #4b5563);
        height: 100%;
        text-align: center;
        padding: 5px;
        width: 100%

    }


`

function Card( {nome, descricao, src, classe} ) {
    return (
        <div className="card__conteudo">
            <h2 className="card__titulo">{ nome }</h2>
            <h3 className="card__subtitulo">{ descricao }</h3>
            <img src={src} className= { classe } />
        </div>
    )
}

function Pesquisa () {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

    return (
        <PesquisaContainer>
            <section className="pesquisa">
                <h2 className="pesquisa__titulo">Já sabe por onde começar?</h2>
                <h3 className="pesquisa__subtitulo">Descubra em nossa coleção tudo o que você precisa para o seu crescimento!</h3>

                <input  placeholder="Qual sua próxima leitura?" 
                    className='pesquisa__input'  
                    onBlur={ event => {
                        const textoDigitado = event.target.value;
                        const resultadosPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                            setLivrosPesquisados(resultadosPesquisa)
                    }
                }
                />
                
                { livrosPesquisados.map( livro => (
                        <Card nome={livro.nome} descricao={livro.descricao} src={livro.src}  classe="card__img"/>
                        ) 
                    ) 
                }
            </section>
        </PesquisaContainer>
    )
}

export default Pesquisa
export {Card}


