import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Wish() {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div className='w-[90%] lg:w-[48%] hover:bg-secondary text-secondary hover:text-white md:w-full flex flex-col md:flex-row justify-center md:justify-evenly items-center border-4 gap-4 border-primary py-4 px-2 lg:px-4 rounded-3xl font-poppins shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
			<div className='w-full md:w-1/3 h-36 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[url("https://shorturl.at/rxyS1")] bg-cover bg-center' />
			<div className='md:w-[45%] flex flex-col justify-center items-center md:text-left md:items-start gap-2 text-center'>
				<p className='text-2xl'>Product Name</p>
				<p className='text-primary text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
					eligendi delectus suscipit, natus consequatur quos atque.
				</p>
			</div>
			<div className='w-full md:w-1/6 h-full flex md:flex-col-reverse justify-between md:gap-12 items-center'>
				<div className='w-12 h-12 rounded-full border-2 border-primary bg-[url("./src/assets/logo.svg")] bg-cover bg-center' />
				{isFavorite && (
					<FontAwesomeIcon
						size='xl'
						icon={faStar}
					/>
				)}
			</div>
		</div>
	);
}
