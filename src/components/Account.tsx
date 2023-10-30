import { useState } from 'react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Account() {
	const [image, setImage] = useState(false);

	return (
		<div className='w-full flex flex-col justify-center font-poppins gap-8 items-center py-10 min-h-[70vh]'>
			<div className='w-[90%] flex flex-col justify-center items-center'>
				<div className='w-40 h-40 relative rounded-full overflow-hidden border-4 border-secondary'>
					{image && (
						<img
							className='h-full'
							src='./src/assets/gradient.png'
							alt='avatar'
						/>
					)}
					{!image && (
						<div className='absolute w-full h-full text-secondary hover:text-white bg-primary bg-opacity-30 hover:bg-opacity-90 top-0 left-0 flex items-center justify-center'>
							<FontAwesomeIcon
								size='2xl'
								icon={faImage}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
