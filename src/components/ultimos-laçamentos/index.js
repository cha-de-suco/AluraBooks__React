import styled from "styled-components";
import { livros } from "./dadosLancamentos";
import { Card } from "../pesquisa";

const ContainerLançamentos = styled.section`

    .lancamentos {
        width: 100%
    }

    .lancamentos__card {
        text-align: center;
    }

    .card {
        background: linear-gradient(to right, #64748b, #4b5563);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
        border-radius: 7px;
        border-left: 5px  solid  #1d4ed8;
        border-bottom: 3px  solid #1d4ed8;
        text-align: center;
        padding: 5px;
        width: 20%
    }

    .lancamentos__lista {
        align-items: center;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    .lista__li {
        width: 100%
        background: linear-gradient(to right, #64748b, #4b5563);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
        border-radius: 7px;
        border-left: 5px  solid  #1d4ed8;
        border-bottom: 3px  solid #1d4ed8;
        height: 461px;
        padding: 0;
        width: 237px;
    }

    .lancamentos__img {
        max-height: 220px;
        max-witdh: 190px;
    }
`

function UltimosLancamentos () {
    return (
        <ContainerLançamentos>
            <section className="lancamentos">
                <div className="lancamentos__card">
                    <h2>Últimos lancamentos</h2>
                    <ul className="lancamentos__lista">
                        { livros.map( livro => (
                            <li className="lista__li">
                                <Card nome={livro.nome} descricao={livro.descricao} src={livro.src} classe="lancamentos__img"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </ContainerLançamentos>
    )
}

export default UltimosLancamentos