import { faPencil, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
interface User {
	user: boolean;
}
export default function Wish({ user }: User) {
	const [isFavorite, setIsFavorite] = useState(true);
	const [claimed, setClaimed] = useState(false);
	return (
		<div
			className='relative w-[90%] lg:w-[48%] hover:bg-secondary text-secondary hover:text-white md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center border-4 gap-4 border-primary py-4 px-2 lg:px-4 rounded-3xl font-poppins shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
			style={claimed ? { opacity: '0.5' } : undefined}
			onClick={() => {
				if (claimed) {
					setClaimed(false);
				} else if (!claimed) {
					console.log(2);
					return <div>Hello</div>;
				}
				return;
			}}
		>
			<div className='w-full md:w-1/3 h-36 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[url("https://shorturl.at/rxyS1")] bg-cover bg-center' />
			<div className='md:w-[45%] flex flex-col justify-center items-center md:text-left md:items-start gap-2 text-center'>
				<p className='text-2xl'>Product Name</p>
				<p className='text-primary text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
					eligendi delectus suscipit, natus consequatur quos atque.
				</p>
			</div>
			<div className='flex justify-between items-center w-full md:w-max md:flex-col-reverse'>
				<div className='w-10 h-10  rounded-full border-2 border-primary bg-[url("./src/assets/logo.svg")] bg-cover bg-center' />
				{isFavorite && (
					<FontAwesomeIcon
						className='mb-6'
						size='xl'
						icon={faStar}
					/>
				)}
				{user && (
					<FontAwesomeIcon
						className='hover:text-primary mb-6'
						size='lg'
						icon={faPencil}
					/>
				)}
			</div>
		</div>
	);
}
