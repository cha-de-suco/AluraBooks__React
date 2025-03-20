import styled from "styled-components";
import { livros } from "./dadosLancamentos.js";
import { Card } from "../pesquisa/index.js";

const ContainerLançamentos = styled.section`

    .lancamentos {
        text-align: center;
        width: 100%;
        height: 100vh;
    }
        
    .lancamentos__h2 {
        font-weight: 700;
        color: #EB9800;
    }

    .lancamentos__div {
        border-top: 1px  solid #d9d9d9;
        display: flex;
        gap: 30px;
        justify-contet: center;
        
    }

    .card {
        background: linear-gradient(to right, #64748b, #4b5563);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
        border-radius: 7px;
        border-left: 5px  solid  #1d4ed8;
        border-bottom: 3px  solid #1d4ed8;
        color: white;
        text-align: center;
        padding: 7px;
        margin-top: 30px;
        width: 17%;
    }


    .lancamentos__img {
        max-height: 220px;
        max-witdh: 190px;
    }

    .separedor {
        margin-right: 123px;
    }
`

function UltimosLancamentos () {
    return (
        <ContainerLançamentos>
            <section className="lancamentos">
                <h2 className="lancamentos__h2">ULTIMOS LANÇAMENTOS</h2>
                <div className="lancamentos__div">
                <div className="separedor"></div>
                    { livros.map( livro => (
                        <Card nome={livro.nome} descricao={livro.descricao} src={livro.src} classe="lancamentos__img"/>
                    ))}
                </div>
            </section>
        </ContainerLançamentos>
    )
}

export default UltimosLancamentos