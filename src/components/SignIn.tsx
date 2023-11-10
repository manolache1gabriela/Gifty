import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  interface SignInInput {
    label: string;
    htmlFor: string;
    id: string;
    name: string;
    type: string;
    autocomplete: string | undefined;
    required: boolean;
    onInput: (value: ChangeEvent<HTMLInputElement>) => void;
  }

  const signInInputs: SignInInput[] = [
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
      autocomplete: 'password',
      required: true,
      onInput: (e) => {
        setPassword(e.target.value);
      },
    },
  ];

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    let response = await fetch('http://192.168.100.17:8080/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
  }

  return (
    <div className='w-full flex flex-col justify-center items-center py-10 min-h-[70vh] font-poppins'>
      <div className='w-full flex flex-col justify-center gap-4 items-center'>
        <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-primary'>
          Sign in to your account
        </h2>
      </div>
      <form
        className='mt-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4'
        action='#'
        onSubmit={(event) => login(event)}
        method='POST'>
        {signInInputs.map((signInInput) => (
          <div key={signInInput.name} className='mt-6'>
            <label
              htmlFor={`${signInInput.htmlFor}`}
              className='block text-sm font-medium leading-6 text-primary'>
              {signInInput.label}
            </label>
            <div className='mt-2'>
              <input
                id={`${signInInput.id}`}
                name={`${signInInput.name}`}
                type={`${signInInput.type}`}
                autoComplete={`${signInInput.autocomplete}`}
                required={signInInput.required}
                onInput={signInInput.onInput}
                className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        ))}
        <div className='text-sm text-right mt-2 mb-4'>
          <a
            href='/forgot'
            className='font-semibold text-primary hover:text-secondary'>
            Forgot password?
          </a>
        </div>
        <div>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
            Sign in
          </button>
        </div>
        <div className='flex justify-center gap-2 text-base mt-4'>
          <p>Not a member? </p>
          <Link
            className='text-secondary hover:text-primary'
            to='/registration'>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
