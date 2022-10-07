import { url } from 'inspector'
import styled from 'styled-components'

interface PropsTopicos {
    icone?:React.ReactElement<any, string | React.JSXElementConstructor<any>> | null,
    titulo?: string,
    texto?:string,
    tema?:string
}

const H2 = styled.h2<PropsTopicos>`
    margin: 0;
    font-size: 1.3vw;
    color: ${props=>props.tema==='light'?'black':'white'};
`
const P = styled.p<PropsTopicos>`
    color: ${props=>props.tema==='light'?'black':'white'};
`
const VantagensItem = styled.div<PropsTopicos>`
    text-align: center;
    padding: 3vw;
    align-self: center;
`

const Topicos:React.FC<PropsTopicos> = ({icone, titulo, texto, tema}) =>{
    return(
        <VantagensItem tema={tema}>
            {icone}
            <H2 tema={tema}>{titulo}</H2>
            <P tema={tema}>{texto}</P>
        </VantagensItem>
    )
}

export default Topicos