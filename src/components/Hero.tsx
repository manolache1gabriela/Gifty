import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface HomeProps {
	toggleAnimation: () => void;
}

export default function Hero({ toggleAnimation }: HomeProps) {
	return (
		<div
			className='w-full h-full absolute top-0 left-0 backdrop-blur-md flex flex-col items-center justify-center py-24 font-poppins'
			id='hero'
		>
			<div className='w-[90%] md:w-2/3 lg:w-1/2 flex flex-col items-center gap-8 md:gap-10 text-center'>
				<h1 className='text-4xl md:text-5xl xl:text-6xl text-secondary'>
					Discover{' '}
					<span className='text-primary font-semibold text-5xl md:text-6xl xl:text-7xl'>
						Gifty
					</span>
					: Your Ultimate Wishlist Solution
				</h1>
				<h3 className='lg:w-[80%] text-lg md:text-xl xl:text-2xl text-primary'>
					Your one-stop app for creating and sharing wishlists with friends and
					family. Simplify gift-giving and make your wishes come true!
				</h3>
			</div>
			<div className='w-[90%] py-4 md:py-6 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row justify-center items-center gap-6'>
				<Link to='/wishlist'>
					<button className='p-6 w-48 flex items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary text-primary'>
						Make a wish
					</button>
				</Link>
				<button
					onClick={toggleAnimation}
					className='w-48 flex items-center justify-center gap-2 text-tertiary hover:text-secondary'
				>
					Learn more
					<FontAwesomeIcon
						size='xs'
						icon={faChevronRight}
					/>
				</button>
			</div>
		</div>
	);
}
