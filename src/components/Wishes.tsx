import Wish from './Wish';

export default function Wishes() {
	return (
		<div className='w-[90%] flex justify-center flex-col gap-8 items-center font-poppins'>
			<div className='w-full flex justify-center items-center md:justify-start gap-4'>
				<img
					className='w-16 h-16 rounded-full border-2 border-primary'
					src='./src/assets/white.jpg'
					alt='avatar'
				/>
				<p className='text-primary text-center text-xl md:text-3xl'>
					<span className='text-secondary'>Name</span> wishes:
				</p>
			</div>
			<div className='flex flex-col md:flex-row justify-between gap-8 flex-wrap items-center'>
				<Wish />
				<Wish />
				<Wish />
			</div>
		</div>
	);
}
