import { faCircleLeft } from '@fortawesome/free-regular-svg-icons/faCircleLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MoreProps {
	toggleSecondAnimation: () => void;
}

export default function More({ toggleSecondAnimation }: MoreProps) {
	return (
		<div
			className='w-full h-full absolute top-0 left-full backdrop-blur-lg flex flex-col gap-4 xl:gap-8 items-center justify-center py-24 font-poppins'
			id='more'
		>
			<div className='w-[90%] md:w-2/3 xl:w-1/2 text-center text-primary text-lg lg:text-xl xl:text-3xl'>
				<p>
					Gifty is the ultimate wishlist app that takes the guesswork out of
					gift-giving and makes sharing your wishes with friends and family a
					breeze. Create your personalized wishlist with all the presents you've
					been dreaming of. Then, invite your loved ones to join Gifty and
					explore your list. They can claim the presents they'd like to gift you
					or even create their own wishlists. With Gifty, giving and receiving
					the perfect gifts has never been so easy and enjoyable!
				</p>
			</div>
			<button
				onClick={toggleSecondAnimation}
				className='text-2xl xl:text-4xl text-primary hover:text-secondary flex justify-center gap-4 items-center'
			>
				<FontAwesomeIcon icon={faCircleLeft} /> Back
			</button>
		</div>
	);
}
