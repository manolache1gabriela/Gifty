interface MenuProps {
	signedIn: boolean;
	toggleSigned: () => void;
}

export default function Menu({ signedIn, toggleSigned }: MenuProps) {
	return (
		<div className=' w-full h-[83vh] flex justify-center items-center font-poppins'>
			<ul className='flex flex-col w-full text-center items-center gap-4'>
				{!signedIn && (
					<button
						onClick={toggleSigned}
						className='w-1/2 p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'
					>
						<li>Log in</li>
					</button>
				)}
				{signedIn && (
					<button
						onClick={toggleSigned}
						className='w-1/2 p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'
					>
						<li>Logout</li>
					</button>
				)}
				{!signedIn && (
					<button className='w-1/2 p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'>
						<li>Register</li>
					</button>
				)}
				{signedIn && (
					<button className='w-1/2 p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'>
						<li>Your Account</li>
					</button>
				)}
			</ul>
		</div>
	);
}
