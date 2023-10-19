export default function Home() {
	return (
		<div className='w-full h-[84vh] xl:h-[88.4vh] bg-[url("./assets/splash.jpg")] bg-cover'>
			<div className='w-full h-full backdrop-blur-lg flex items-center justify-center py-24 font-poppins'>
				<div className='w-[90%] md:w-2/3 lg:w-1/2 flex flex-col items-center gap-8 md:gap-10 text-center'>
					<h1 className='text-4xl md:text-5xl xl:text-6xl text-secondary'>
						Discover{' '}
						<span className='text-primary font-semibold text-5xl md:text-6xl xl:text-7xl'>
							Gifty
						</span>
						: Your Ultimate Wishlist Solution
					</h1>
					<h3 className='lg:w-[80%] text-lg md:text-xl xl:text-2xl text-primary'>
						Your one-stop app for creating and sharing wishlists with friends
						and family. Simplify gift-giving and make your wishes come true!
					</h3>
				</div>
			</div>
		</div>
	);
}
