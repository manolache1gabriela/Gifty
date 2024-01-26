import { Fragment, Dispatch, SetStateAction, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface EditAccountModal {
  showEditAccountModal: boolean;
  toggleEdit: () => void;
  setShowEditAccountModal: (() => boolean) | Dispatch<SetStateAction<boolean>>;
}

export default function EditAccount({
  showEditAccountModal,
  setShowEditAccountModal,
}: EditAccountModal) {
  const user = JSON.parse(localStorage.getItem('user'));
  const day: ReactNode[] = [];
  const month: ReactNode[] = [];
  const year: ReactNode[] = [];
  for (let i = 1; i <= 31; i++) {
    day.push(
      <option key={`${i}`} value={`${i}`}>
        {i}
      </option>
    );
  }
  for (let i = 1; i <= 12; i++) {
    month.push(
      <option key={`${i}`} value={`${i}`}>
        {i}
      </option>
    );
  }
  for (let i = 2023; i >= 1990; i--) {
    year.push(
      <option key={`${i}`} value={`${i}`}>
        {i}
      </option>
    );
  }
  return (
    <Transition.Root show={showEditAccountModal} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10 font-poppins'
        onClose={setShowEditAccountModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-[90vh] md:min-h-[100vh] items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 '>
                  <div>
                    <form className='space-y-2 w-full' action='#' method='POST'>
                      <div className='flex flex-col items-start'>
                        <label
                          htmlFor='change-name'
                          className='block font-semibold text-sm leading-6 text-primary'>
                          Change Name
                        </label>
                        <div className='w-full'>
                          <input
                            id='change-name'
                            name='change-name'
                            type='text'
                            defaultValue={`${user.name}`}
                            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col items-start'>
                        <label
                          htmlFor='change-email'
                          className='block font-semibold text-sm leading-6 text-primary'>
                          Change email address
                        </label>
                        <div className='w-full'>
                          <input
                            id='change-email'
                            name='change-email'
                            type='email'
                            defaultValue={`${user.email}`}
                            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <label
                          className='block font-semibold text-sm leading-6 text-primary'
                          htmlFor='birthday'>
                          Birth Date
                        </label>
                        <div className='flex justify-between'>
                          <select
                            id='day'
                            name='day'
                            className='w-[30%] border-2 border-primary rounded-lg text-primary'>
                            <option value='day'>Day</option>
                            {day}
                          </select>
                          <select
                            id='month'
                            name='month'
                            className='w-[30%] border-2 border-primary rounded-lg text-primary'>
                            <option selected value='month'>
                              Month
                            </option>
                            {month}
                          </select>
                          <select
                            id='year'
                            name='year'
                            className='w-[30%] border-2 border-primary rounded-lg text-primary'>
                            <option value='year'>Year</option>
                            {year}
                          </select>
                        </div>
                      </div>
                      <div className='flex flex-col items-start'>
                        <label
                          htmlFor='change-photo'
                          className='block text-sm font-semibold leading-6 text-primary'>
                          Change photo
                        </label>
                        <div className='w-full'>
                          <input
                            id='change-photo'
                            name='change-photo'
                            type='file'
                            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:ring-0 hover:bg-secondary hover:text-white sm:mt-0 sm:w-auto'
                    onClick={() => setShowEditAccountModal(false)}>
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
