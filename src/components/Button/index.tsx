import styled from 'styled-components'

interface Props {
    tema?:string;
}

const Button = styled.button<Props>`
    background-color: ${props => props.tema==='light' ? 'black':'white'};
    color: ${props => props.tema==='light' ? 'white':'black'};
    border-color: ${props => props.tema==='light' ? 'white':'black'};
    width: 8vw;
    height: 5vw;
    border-radius: 20%;
`

export default Button
