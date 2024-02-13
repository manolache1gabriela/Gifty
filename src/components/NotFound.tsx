export default function NotFound() {
  return (
    <div className='w-full flex flex-col justify-center gap-8 items-center py-10 min-h-[70vh] font-poppins'>
      <div className='text-center'>
        <p className='text-base font-semibold text-primary'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-primary'>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='/'
            className='rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}
