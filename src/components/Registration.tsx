import { ReactNode } from 'react';

export default function Registration() {
	const day: ReactNode[] = [];
	const month: ReactNode[] = [];
	const year: ReactNode[] = [];
	for (let i = 1; i <= 31; i++) {
		day.push(<option value={`${i}`}>{i}</option>);
	}
	for (let i = 1; i <= 12; i++) {
		month.push(<option value={`${i}`}>{i}</option>);
	}
	for (let i = 2023; i >= 1990; i--) {
		year.push(<option value={`${i}`}>{i}</option>);
	}

	return (
		<div className='w-full flex flex-col justify-center gap-8 items-center py-10 min-h-[70vh] font-poppins'>
			<div>
				<h3 className='text-xl lg:text-2xl text-secondary font-semibold'>
					Create your Free Account
				</h3>
			</div>
			<form
				className='space-y-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4'
				action='#'
				method='POST'
			>
				<div>
					<label
						htmlFor='name'
						className='block text-sm font-semibold leading-6 text-primary'
					>
						Name
					</label>
					<div className='mt-2'>
						<input
							id='name'
							name='name'
							type='name'
							autoComplete='name'
							required
							className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block font-semibold text-sm leading-6 text-primary'
					>
						Email address
					</label>
					<div className='mt-2'>
						<input
							id='email'
							name='email'
							type='email'
							autoComplete='email'
							required
							className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor='password'
						className='block font-semibold text-sm leading-6 text-primary'
					>
						Password
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
				</div>
				<div>
					<label
						htmlFor='re-password'
						className='block font-semibold text-sm leading-6 text-primary'
					>
						Confirm password
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
				<div className='flex flex-col gap-2'>
					<label
						className='block font-semibold text-sm leading-6 text-primary'
						htmlFor='birthday'
					>
						Birth Date
					</label>
					<div className='flex justify-between'>
						<select
							id='day'
							name='day'
							className='w-[30%] border-2 border-primary rounded-lg text-primary'
						>
							<option value='day'>Day</option>
							{day}
						</select>
						<select
							id='month'
							name='month'
							className='w-[30%] border-2 border-primary rounded-lg text-primary'
						>
							<option
								selected
								value='month'
							>
								Month
							</option>
							{month}
						</select>
						<select
							id='year'
							name='year'
							className='w-[30%] border-2 border-primary rounded-lg text-primary'
						>
							<option value='year'>Year</option>
							{year}
						</select>
					</div>
				</div>
				<div>
					<button
						type='submit'
						className='flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
					>
						Create an account
					</button>
				</div>
			</form>
		</div>
	);
}
