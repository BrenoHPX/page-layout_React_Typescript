import styled from 'styled-components';
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare';
import {Instagram} from '@styled-icons/bootstrap/Instagram';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import React from 'react';

interface ContatoProps {
    texto?:string,
    img?:string,
    tema?:string
}

const Titulo = styled.p<ContatoProps>`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 10vw;
    font-size: 5vw;
    text-shadow: 2px 2px 4px black, 2px 2px 40px grey;
    margin: 0;
    padding: 0;
    color: black;
    `;

const DivImg = styled.div<ContatoProps>`
    background-image: url(${props=>props.img});
    background-repeat: repeat;
    background-size: 150%;
    background-position: center;
    `;
const Footer = styled.div<ContatoProps>`
    display: flex;
    justify-content: space-between;
    min-height: 10vw;
    background-color: ${props => props.tema === 'light'? 'white':'black'};
    opacity:0.85;
    `;
const DivFooter = styled.div`
    margin-left: 8vw;
    justify-items: left;
    align-self: center;
    `;
const Li = styled.li<ContatoProps>`
    display: inline;
    font-weight: 800;
    margin: 0 2vw 1vw 0vw;
    color: ${props => props.tema === 'light'? 'black':'white'};
    `;
const Ul = styled.ul`
    margin: 0;
    padding: 0;
    `;
const Icones = styled.ul`
    padding: 3vw 7vw 3vw 0vw;
    `;
const IconesImg = styled.img`
    margin-left: 3vw;
    width: 3vw;
    `; 
const P = styled.p<ContatoProps>`
    color: ${props=>props.tema === 'light'? 'black':'white'};
    `;
const StyledFacebookSquare = styled(FacebookSquare)<ContatoProps>`
    color:${props=>props.tema==='light'?'black':'white'}; 
`;
const StyledInstagram = styled(Instagram)<ContatoProps>`
    color:${props=>props.tema==='light'?'black':'white'};
`;
const StyledTwitter = styled(Twitter)<ContatoProps>`
    color:${props=>props.tema==='light'?'black':'white'};
`;
const Contato:React.FC<ContatoProps> = ({texto, img, tema}) => {

	return(
		<>
			<DivImg img={img}>
				<Titulo tema = {tema}>{texto}</Titulo>
			</DivImg>
			<Footer tema = {tema}>
				<DivFooter>
					<Ul>
						<Li tema = {tema}>About</Li>
						<Li tema = {tema}>Contact</Li>
						<Li tema = {tema}>Term of Use</Li>
						<Li tema = {tema}>Privacy Policy</Li>
					</Ul>
					<P tema = {tema}>Your Website 2022. All Rights Reserved</P>
				</DivFooter>
				<Icones>
					<StyledFacebookSquare tema = {tema} size='40'/>
					<StyledInstagram tema = {tema} size='32'/>
					<StyledTwitter tema = {tema} size='40'/>
				</Icones>
			</Footer>
		</>
	);
};

export default Contato; 