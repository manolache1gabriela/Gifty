export default function NewPassword() {
	return (
		<div className='w-full flex flex-col justify-center font-poppins gap-8 items-center py-10 min-h-[70vh]'>
			<div className='w-full px-4 flex flex-col items-center text-center text-primary gap-2'>
				<h3 className='text-xl lg:text-2xl font-semibold'>
					Reset your password
				</h3>
			</div>
			<form
				className='space-y-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4'
				action='#'
				method='POST'
			>
				<div>
					<label
						htmlFor='password'
						className='block text-sm font-medium leading-6 text-primary'
					>
						New password
					</label>
					<div className='mt-2'>
						<input
							id='password'
							name='password'
							type='password'
							required
							className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
						/>
					</div>
					<label
						htmlFor='re-password'
						className='block text-sm mt-4 font-medium leading-6 text-primary'
					>
						Reenter password
					</label>
					<div className='mt-2'>
						<input
							id='re-password'
							name='re-password'
							type='password'
							required
							className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
				<div>
					<button
						type='submit'
						className='flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
					>
						Reset password
					</button>
				</div>
			</form>
		</div>
	);
}
