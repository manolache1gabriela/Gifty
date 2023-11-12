// import { ReactNode } from 'react';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Registration() {
  interface RegistrationInput {
    label: string;
    htmlFor: string;
    id: string;
    name: string;
    type: string;
    autocomplete: string | undefined;
    required: boolean;
    onInput: (value: ChangeEvent<HTMLInputElement>) => void;
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();
  // const day: ReactNode[] = [];
  // const month: ReactNode[] = [];
  // const year: ReactNode[] = [];
  // for (let i = 1; i <= 31; i++) {
  //   day.push(<option value={`${i}`}>{i}</option>);
  // }
  // for (let i = 1; i <= 12; i++) {
  //   month.push(<option value={`${i}`}>{i}</option>);
  // }
  // for (let i = 2023; i >= 1990; i--) {
  //   year.push(<option value={`${i}`}>{i}</option>);
  // }

  const registrationInputs: RegistrationInput[] = [
    {
      label: 'Name',
      htmlFor: 'name',
      id: 'name',
      name: 'name',
      type: 'name',
      autocomplete: 'name',
      required: true,
      onInput: (e) => {
        setName(e.target.value);
      },
    },
    {
      label: 'Email address',
      htmlFor: 'email',
      id: 'email',
      name: 'email',
      type: 'email',
      autocomplete: 'email',
      required: true,
      onInput: (e) => {
        setEmail(e.target.value);
      },
    },
    {
      label: 'Password',
      htmlFor: 'password',
      id: 'password',
      name: 'password',
      type: 'password',
      autocomplete: undefined,
      required: true,
      onInput: (e) => {
        setPassword(e.target.value);
      },
    },
    {
      label: 'Confirm password',
      htmlFor: 're-password',
      id: 're-password',
      name: 're-password',
      type: 'password',
      autocomplete: undefined,
      required: true,
      onInput: (e) => {
        setPasswordConfirmation(e.target.value);
      },
    },
  ];

  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    let response = await fetch('http://192.168.100.17:8080/api/register', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
    response = await response.json();
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    const { id } = response.data.user;
    navigate(`/wishlist/${id}`);
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
        onSubmit={(event) => register(event)}
        method='POST'>
        {registrationInputs.map((input) => (
          <div key={input.name}>
            <label
              htmlFor={`${input.htmlFor}`}
              className='block text-sm font-semibold leading-6 text-primary'>
              {input.label}
            </label>
            <div className='mt-2'>
              <input
                id={`${input.id}`}
                name={`${input.name}`}
                type={`${input.type}`}
                autoComplete={`${input.autocomplete}`}
                required={input.required}
                onInput={input.onInput}
                className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        ))}
        {/* <div className='flex flex-col gap-2'>
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
				</div> */}
        <div>
          <button
            type='submit'
            key='submit'
            className='flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
}
