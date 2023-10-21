import Logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

interface NavbarProps {
	showMenu: boolean;
	toggleMenu: () => void;
	signedIn: boolean;
	toggleSigned: () => void;
}

export default function Navbar({
	showMenu,
	toggleMenu,
	signedIn,
	toggleSigned,
}: NavbarProps) {
	return (
		<div className='w-full h-28 shadow-[inset_0px_-10px_20px_0px_#00000024] flex items-center justify-center font-poppins'>
			<div className='h-full w-[80%] flex items-center justify-between'>
				<Link to='/'>
					<img
						className='w-2/3 md:w-48'
						src={Logo}
						alt='gifty logo'
					/>
				</Link>
				<div>
					<div className='hidden lg:flex'>
						{!signedIn && (
							<button
								className='p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'
								onClick={toggleSigned}
							>
								Sign in
							</button>
						)}
						{signedIn && (
							<div className='flex gap-8 justify-between item'>
								<button
									className='p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'
									onClick={toggleSigned}
								>
									Logout
								</button>
								<button className='p-6 flex items-center justify-center h-12 gap-2 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary text-primary'>
									Your Account <FontAwesomeIcon icon={faUser} />
								</button>
							</div>
						)}
					</div>
					{!showMenu && (
						<button
							onClick={toggleMenu}
							className='lg:hidden text-2xl text-indigo-950'
						>
							<FontAwesomeIcon icon={faBars} />
						</button>
					)}
					{showMenu && (
						<button
							onClick={toggleMenu}
							className='lg:hidden text-2xl text-indigo-950'
						>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
