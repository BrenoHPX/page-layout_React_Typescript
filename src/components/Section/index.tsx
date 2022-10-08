import styled from 'styled-components';
import React from 'react';

interface PhotoProps {
    photoUrl?:string,
    title?:string,
    text?:string,
    photoSide?:string,
    tema?:string;
}

const ImgDiv = styled.div<PhotoProps>`
    width: 50vw;
    height: 40vw;
    background-image: url(${props=>props.photoUrl});
    background-repeat:no-repeat;
    background-size:cover;
    `;
    
const TextDiv = styled.div<PhotoProps>`
    width: 50vw;
    height: 40vw;
    text-align: left;
    padding: 8vw;
    box-sizing:border-box;
    word-wrap: break-word;
    background-color: ${props=>props.tema==='light' ? 'white':'#0a0a0a'};
    color: ${props=>props.tema==='light' ? 'black':'white'};
    opacity: 0.85;
    `;
const Container = styled.div`
    display: flex;
    `;
const H1 = styled.h1<PhotoProps>`
    margin: 0vw;
    color: ${props=>props.tema==='light' ? 'black':'white'};
    `;
const P = styled.p<PhotoProps>`
    margin: 0vw;
    color: ${props=>props.tema==='light' ? 'black':'white'};
    `;

const Section:React.FC<PhotoProps> = ({photoUrl, title, text, photoSide, tema}) => {

	switch (photoSide) {
	case 'left':
		return(
			<Container>
				<ImgDiv photoUrl={photoUrl}/>
				<TextDiv tema={tema}>
					<H1 tema={tema}>{title}</H1>
					<P tema={tema}>{text}</P>
				</TextDiv>
			</Container>
		);
		break;
	case 'right':
		return(
			<Container>
				<TextDiv tema={tema}>
					<H1 tema={tema}>{title}</H1>
					<P tema={tema}>{text}</P>
				</TextDiv>
				<ImgDiv photoUrl={photoUrl}/>
			</Container>
		);
		break;
    
	default:
		return(
			<>
				<Container>
					<ImgDiv photoUrl={photoUrl}/>
					<TextDiv tema={tema}>
						<H1 tema={tema}>{title}</H1>
						<P tema={tema}>{text}</P>
					</TextDiv>
				</Container>
			</>
		);
		break;
	}    
};

export default Section;