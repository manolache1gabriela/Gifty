export default function Wish() {
	return (
		<div className='w-[90%] lg:w-[48%] xl:w-[49%] hover:bg-secondary text-secondary hover:text-white md:w-full flex flex-col md:flex-row justify-center items-center border-4 gap-4 border-primary py-4 px-2 lg:px-4 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
			<div className='w-full md:w-1/3 h-36 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[url("https://shorturl.at/rxyS1")] bg-cover bg-center' />
			<div className='md:w-2/3 flex flex-col justify-center items-center md:text-justify md:items-start gap-2 text-center'>
				<p className='text-2xl'>Product Name</p>
				<p className='text-primary text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
					eligendi delectus suscipit, natus consequatur quos atque.
				</p>
			</div>
			<div className='w-12 h-12 rounded-full border-2 border-primary bg-[url("./src/assets/logo.svg")] bg-cover bg-center' />
		</div>
	);
}
