import { useState } from 'react';
import Hero from './Hero';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import More from './More';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wishlist from './Wishlist';
import SignIn from './SignIn';
import Forgot from './Forgot';
import Registration from './Registration';
import NotFound from './NotFound';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	function toggleMenu() {
		setShowMenu(!showMenu);
		document.querySelector('body')?.classList.toggle('overflow-hidden');
	}

	const [signedIn, setSignedIn] = useState(false);
	function toggleSigned() {
		setSignedIn(!signedIn);
	}

	function toggleAnimation() {
		const hero = document.querySelector('#hero');
		const more = document.querySelector('#more');

		hero?.classList.add('animate-slide_out');
		more?.classList.add('animate-slide_in');
	}

	function toggleSecondAnimation() {
		const hero = document.querySelector('#hero');
		const more = document.querySelector('#more');

		hero?.classList.remove('animate-slide_out');
		more?.classList.remove('animate-slide_in');
		hero?.classList.add('animate-slide_back_in');
		more?.classList.add('animate-slide_back_out');
	}

	return (
		<Router>
			<Navbar
				toggleMenu={toggleMenu}
				showMenu={showMenu}
				signedIn={signedIn}
				toggleSigned={toggleSigned}
			/>
			{showMenu && (
				<Menu
					signedIn={signedIn}
					toggleSigned={toggleSigned}
				/>
			)}
			<Routes>
				<Route
					path='/'
					element={
						<div className='w-full relative h-[84vh] xl:h-[88.4vh] bg-[url("./assets/splash.jpg")] bg-cover flex'>
							<Hero toggleAnimation={toggleAnimation} />
							<More toggleSecondAnimation={toggleSecondAnimation} />
						</div>
					}
				/>
				<Route
					path='/wishlist'
					element={<Wishlist />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn />}
				/>
				<Route
					path='/forgot'
					element={<Forgot />}
				/>
				<Route
					path='/registration'
					element={<Registration />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
