import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.background || '#EB9800'};
    border: none;
    color: white;
    display: ${props => props.display || 'inline-block'};
    font-weight: 700;
    margin: 10px  10px;
    font-size: 1em;
    height: ${props => props.altura || '40px'}; 
    width: ${props => props.largura || '191px'};
`