import styled from 'styled-components';
import React from 'react';

interface HeaderProps {
    text?:string,
    tema?:string;
    children:React.ReactNode;
}

const Title = styled.p<HeaderProps>`
    display: grid;
    grid: 1fr/11fr 1fr;
    justify-content: space-between;
    padding: 2vw;
    text-align:center;
    opacity:0.85;
    letter-spacing: 0.5vw;
    text-shadow: 0.1vw 0.1vw 0.1vw white;
    font-size: 3vw;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: black;
    color: white;
    margin:0vw;
    `;

const HeaderDiv = styled.div`
    background-image: url("https://static.vecteezy.com/system/resources/previews/007/852/922/original/moon-phases-white-border-frame-wicca-banner-sign-triple-moon-pagan-wiccan-goddess-symbol-sacred-geometry-wheel-of-the-year-and-stars-isolated-on-black-background-vector.jpg");
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    background-color:black;
    opacity:0.85;
    color: white;
    height: 48vh;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    `;
//minha primeira.... light
const Header:React.FC<HeaderProps> = ({text, tema, children}) => {

	return(
		<>
			<Title tema={tema}>
				{text}
				{children}
			</Title>
			<HeaderDiv></HeaderDiv>
		</>
	);
};

export default Header;