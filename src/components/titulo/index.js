import styled from "styled-components";

export const Titulo = styled.h2`
        background: ${props => props.background || '#ffffff'};
        font-size: ${props => props.fonte || '2.3em'};
        font-weight: 700;
        color: ${props => props.cor || '#EB9800'};
        margin: 0;
        padding: 25px  0;
`
