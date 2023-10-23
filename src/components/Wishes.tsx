import Wish from './Wish';

export default function Wishes() {
	const filters: string[] = ['filter 1', 'filter 2', 'filter 3', 'filter 4'];

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
			<div className='flex flex-wrap w-[90%] justify-center md:justify-start md:w-full gap-8'>
				{filters.map((filter) => (
					<button className='bg-secondary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 py-1 rounded-full text-white hover:bg-primary'>
						{filter}
					</button>
				))}
			</div>
			<div className='flex flex-col md:flex-row justify-between gap-8 flex-wrap items-center'>
				<Wish />
				<Wish />
				<Wish />
			</div>
		</div>
	);
}
