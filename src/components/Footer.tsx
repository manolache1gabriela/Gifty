import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
	return (
		<div className='py-8 w-full shadow-[inset_0px_-10px_20px_0px_#00000024] flex flex-col gap-10 items-center justify-center font-poppins'>
			<div className='w-[90%] flex flex-col md:flex-row gap-4 items-center justify-between'>
				<img
					className='w-2/3 md:w-48'
					src={Logo}
					alt='gifty logo'
				/>
				<div className='flex flex-col items-center md:items-end text-primary'>
					<p className='text-xl mb-2'>Creators:</p>
					<a
						href='https://www.claudiupopa.ro'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-secondary italic'
					>
						Claudiu Popa{' '}
						<FontAwesomeIcon
							size='xs'
							icon={faArrowUpRightFromSquare}
						/>
					</a>
					<a
						href='https://gabriela-manolache.netlify.app'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-secondary italic'
					>
						Gabriela Manolache{' '}
						<FontAwesomeIcon
							size='xs'
							icon={faArrowUpRightFromSquare}
						/>
					</a>
				</div>
			</div>
			<p className='text-xs text-tertiary'>
				Copyright © 2023. All rights are reserved
			</p>
		</div>
	);
}
