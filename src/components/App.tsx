import { useState } from 'react';
import Hero from './Hero';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import More from './More';

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
		requestAnimationFrame(() => {
			const hero = document.querySelector('#hero');
			const more = document.querySelector('#more');

			hero?.classList.toggle('animate-slide_out');
			more?.classList.toggle('animate-slide_in');
		});
	}
	function toggleSecondAnimation() {
		requestAnimationFrame(() => {
			const hero = document.querySelector('#hero');
			const more = document.querySelector('#more');

			hero?.classList.toggle('animate-slide_back_in');
			more?.classList.toggle('animate-slide_back_out');
		});
	}

	return (
		<>
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
			<div className='w-full relative h-[84vh] xl:h-[88.4vh] bg-[url("./assets/splash.jpg")] bg-cover flex'>
				<Hero toggleAnimation={toggleAnimation} />
				<More toggleSecondAnimation={toggleSecondAnimation} />
			</div>
			<Footer />
		</>
	);
}

export default App;
