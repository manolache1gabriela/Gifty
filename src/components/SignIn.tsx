import { Link } from 'react-router-dom';

export default function SignIn() {
  const login = fetch('http://192.168.100.17:8080/api/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'joe2@test.com',
      password: 'test123',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(login);

  return (
    <div className='w-full flex flex-col justify-center gap-8 items-center py-10 min-h-[70vh] font-poppins'>
      <div className='w-full flex flex-col justify-center gap-4 items-center'>
        <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-primary'>
          Sign in to your account
        </h2>
      </div>
      <form
        className='space-y-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4'
        action='#'
        method='POST'>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-primary'>
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
          <div className='flex items-center justify-between'>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-primary'>
              Password
            </label>
            <div className='text-sm'>
              <a
                href='/forgot'
                className='font-semibold text-primary hover:text-secondary'>
                Forgot password?
              </a>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
            Sign in
          </button>
        </div>
        <div className='flex justify-center gap-2 text-base'>
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
