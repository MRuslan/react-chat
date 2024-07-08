import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ReactSVG } from "react-svg";

import './header.scss'

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<div className="header-frame">
// 				<div className="header-frame__left">
// 					React Chat
// 				</div>
// 				<div className="header-frame__right">
// 					{/* <Link to="/chats"> */}
// 						<ReactSVG
// 							className='icon-svg'
// 							beforeInjection={(svg) => {
// 								svg.classList.add("svg-class-name");
// 							}}
// 							// onClick={() => {
// 							// 	// window.open('/chats', '_self');
// 							// }}
// 							onClick={() => navigate('/chats', { replace: false })}
// 							src="/svg/interface/chats.svg" />
// 					{/* </Link> */}
// 					<ReactSVG
// 						className='icon-svg'
// 						onClick={() => {
// 							console.log("Click Login");
// 						}}
// 						src="/svg/interface/login.svg" />
// 					<ReactSVG
// 						className='icon-svg'
// 						onClick={() => {
// 							console.log("Click Logout");
// 						}}
// 						src="/svg/interface/logout.svg" />
// 					<ReactSVG
// 						className='icon-svg'
// 						onClick={() => {
// 							console.log("Click Account");
// 						}}
// 						src="/svg/interface/account.svg" />
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Header;

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header-frame">
			<div className="header-frame__left">
				React Chat
			</div>
			<div className="header-frame__right">
				{/* <Link to="/chats"> */}
				<ReactSVG
					className='icon-svg'
					beforeInjection={(svg) => {
						svg.classList.add("svg-class-name");
					}}
					// onClick={() => {
					// 	// window.open('/chats', '_self');
					// }}
					onClick={() => navigate('/chats', { replace: false })}
					src="/svg/interface/chats.svg" />
				{/* </Link> */}
				<ReactSVG
					className='icon-svg'
					onClick={() => {
						console.log("Click Login");
					}}
					src="/svg/interface/login.svg" />
				<ReactSVG
					className='icon-svg'
					onClick={() => {
						console.log("Click Logout");
					}}
					src="/svg/interface/logout.svg" />
				<ReactSVG
					className='icon-svg'
					onClick={() => {
						console.log("Click Account");
					}}
					src="/svg/interface/account.svg" />
			</div>
		</div>
	);
};

export default Header;