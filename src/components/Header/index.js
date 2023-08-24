import React from 'react';
import Nav from '../Nav';
import './style.css';
import headerImg from '../../assets/weavers-needle.png'

const Header = ({ pages, currentPage, setCurrentPage }) => {
	return (
		<header className="container-fluid">
			<img src={headerImg} alt="weavers needle" />
			<div className="container d-lg-flex justify-content-lg-between py-3">
				<h1 className="text-center">Chris Verges</h1>
				<Nav
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</header>
	);
};

export default Header;
