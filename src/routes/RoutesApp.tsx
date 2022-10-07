import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NotFound from '../pages/404/NotFound';
import Home from '../pages/home/Home';

const RoutesApp:React.FC = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/*' element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	);
};


export default RoutesApp;