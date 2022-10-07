import styled from 'styled-components';
import Topicos from '../Topicos';
import {Desktop} from '@styled-icons/fluentui-system-regular/Desktop';
import {Component} from '@styled-icons/boxicons-solid/Component';
import {ArrowRepeat} from '@styled-icons/bootstrap/ArrowRepeat';
import React from 'react';

    interface VantagensProps {
        tema?:string
    }
const VantagensContainer = styled.div<VantagensProps>`
    width: 100%;
    min-height: 20vw;
    background-color: ${props=>props.tema==='light'?'lightgrey':'black'};
    opacity:0.88;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding: 0 4vw 0 4vw;
    `;
const StyledDesktop = styled(Desktop)<VantagensProps>`
        color:${props=>props.tema==='light'?'black':'white'}; 
    `;
const StyledComponent = styled(Component)<VantagensProps>`
        color:${props=>props.tema==='light'?'black':'white'};
    `;
const StyledArrowRepeat = styled(ArrowRepeat)<VantagensProps>`
        color:${props=>props.tema==='light'?'black':'white'};
    `;
const Vantagens:React.FC<VantagensProps> = ({tema}) =>{
    
	return(
		<VantagensContainer tema={tema}>
			<Topicos tema={tema} icone={<StyledDesktop tema={tema} size='60' />} titulo='Somente para desktop' texto='Vamos aprender como utilizar um framework'/>
			<Topicos tema={tema} icone={<StyledComponent tema={tema} size='60'/>} titulo='Criado com componentes' texto='Utilizamos o Styled Components'/>
			<Topicos tema={tema} icone={<StyledArrowRepeat tema={tema} size='60'/>} titulo='Fácil aproveitamento' texto='Estamos no caminho'/>
		</VantagensContainer>
	);
};

export default Vantagens;