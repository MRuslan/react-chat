import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'

import './pages.scss'

import { PageHome, PageChats, PageProfile } from './Layout';

class Pages extends React.Component {
	render() {
		return (
			<div className="wrapper-page">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PageHome />} />
						<Route path="/chats" element={<PageChats />} />
						<Route path="/profile" element={<PageProfile />} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}

export default Pages;