import { useState } from 'react';
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';

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
			<Home />
		</>
	);
}

export default App;
