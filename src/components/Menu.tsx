interface MenuProps {
  logIn: () => void;
  logOut: () => void;
  signedIn: boolean;
}

export default function Menu({ signedIn, logIn, logOut }: MenuProps) {
  return (
    <div className=' w-full h-[83vh] flex justify-center items-center font-poppins'>
      <ul className='flex flex-col w-full text-center items-center gap-4'>
        {!signedIn && (
          <a className='w-1/2' href='/sign-in'>
            <button
              onClick={logIn}
              className='w-full p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'>
              <li>Log in</li>
            </button>
          </a>
        )}
        {signedIn && (
          <a className='w-1/2' href='/'>
            <button
              onClick={logOut}
              className='w-full p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'>
              <li>Logout</li>
            </button>
          </a>
        )}
        {!signedIn && (
          <a className='w-1/2' href='/registration'>
            <button className='w-full p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'>
              <li>Register</li>
            </button>
          </a>
        )}
        {signedIn && (
          <a className='w-1/2' href='/account'>
            <button className='w-full p-6 flex text-primary items-center justify-center h-12 hover:bg-primary hover:text-white rounded-full border-2 text-lg border-primary'>
              <li>Your Account</li>
            </button>
          </a>
        )}
      </ul>
    </div>
  );
}
