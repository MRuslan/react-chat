import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'

import './pages.scss'

import { HomePage } from './Home/Home';
import { ChatsPage } from './Chats/Chats';

class Pages extends React.Component {
	render() {
		return (
			<div className="wrapper-page">
				<BrowserRouter>
					<Routes>
						<Route path="*" element={<HomePage />} />
						<Route path="chats" element={<ChatsPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}

export default Pages;