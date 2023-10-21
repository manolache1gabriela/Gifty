import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WishedParams {
	toggleWished: () => void;
}

export default function NoWish({ toggleWished }: WishedParams) {
	return (
		<div className='font-poppins text-2xl md:text-3xl xl:text-4xl text-primary text-center gap-8 flex flex-col w-[90%] lg:w-1/2'>
			<p>
				It appears that you don't have any wishes yet, click the button below to
				make a wish.
			</p>
			<button
				onClick={toggleWished}
				className='hover:text-secondary'
			>
				<FontAwesomeIcon
					size='2xl'
					icon={faCirclePlus}
				/>
			</button>
		</div>
	);
}
