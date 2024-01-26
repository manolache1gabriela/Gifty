import { Fragment, Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';
interface AddWishModal {
  showAddWishModal: boolean;
  setShowAddWishModal: (() => boolean) | Dispatch<SetStateAction<boolean>>;
}

export interface Categories {
  readonly value: string;
  readonly label: string;
}

export default function AddWishModal({
  showAddWishModal,
  setShowAddWishModal,
}: AddWishModal) {
  const [prodName, setProdName] = useState('');
  const [price, setPrice] = useState(50);
  const [quantity, setQuantity] = useState(1);
  const [prodImg, setProdImg] = useState<File>();
  const [favorite, setFavorite] = useState(false);
  const [link, setLink] = useState('');
  const defaultCategories: Categories[] = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
  ];
  const [prodCategories, setProdCategories] = useState([]);
  const token = useToken();
  async function addWish(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    const user = JSON.parse(localStorage.getItem('user'));
    let response = await fetch(
      `http://192.168.100.33:8080/api/wishes/${user.id}/add`,
      {
        method: 'POST',
        body: JSON.stringify({
          name: prodName,
          is_favorite: favorite,
          quantity: quantity,
          price: price,
          link: link,
          image: prodImg,
          categories: prodCategories,
        }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          authorization: `Bearer ` + token,
        },
      }
    );
    response = await response.json();
    navigate(0);
  }

  const navigate = useNavigate();
  const animatedComponents = makeAnimated();

  return (
    <Transition.Root show={showAddWishModal} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10 font-poppins'
        onClose={setShowAddWishModal}>
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
                  <div className='sm:flex items-center justify-center'>
                    <div className='text-center sm:ml-4 sm:mt-0 sm:text-left text-primary'>
                      <Dialog.Title
                        as='h3'
                        className='text-xl font-semibold leading-6 text-secondary'>
                        Add a new wish
                      </Dialog.Title>
                      <div className='mt-2 flex w-full flex-col items-center justify-center gap-4'>
                        <p className='w-full text-sm font-semibold'>
                          Fill in the wish description below.
                        </p>
                        <form
                          className='space-y-2 w-full'
                          onSubmit={(event) => addWish(event)}
                          method='POST'>
                          <div className='flex flex-col items-start'>
                            <label
                              htmlFor='product-name'
                              className='block text-sm font-medium leading-6 text-primary'>
                              Product Name
                            </label>
                            <div className='w-full'>
                              <input
                                id='product-name'
                                name='product-name'
                                type='text'
                                onInput={(e) => {
                                  setProdName(e.target.value);
                                }}
                                required
                                className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                              />
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <div className='w-1/2 flex flex-col items-start gap-2'>
                              <label
                                htmlFor='price'
                                className='block text-sm font-medium leading-6 text-primary'>
                                Price (RON)
                              </label>
                              <div className='w-full'>
                                <input
                                  id='price'
                                  name='price'
                                  type='number'
                                  min={0}
                                  onInput={(e) => {
                                    setPrice(e.target.value);
                                  }}
                                  placeholder='50'
                                  className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                                />
                              </div>
                            </div>
                            <div className='w-1/2 flex flex-col items-start gap-2'>
                              <label
                                htmlFor='quantity'
                                className='block text-sm font-medium leading-6 text-primary'>
                                Quantity
                              </label>
                              <div className='w-full'>
                                <input
                                  id='quantity'
                                  name='quantity'
                                  type='number'
                                  onInput={(e) => {
                                    setQuantity(e.target.value);
                                  }}
                                  min={0}
                                  placeholder='1'
                                  className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-col items-start gap-2'>
                            <label
                              htmlFor='image'
                              className='block text-sm font-medium leading-6 text-primary'>
                              Image (only .png or .jpg)
                            </label>
                            <div className='w-full'>
                              <input
                                id='image'
                                name='image'
                                type='file'
                                onInput={(e) => {
                                  setProdImg(e.target.files);
                                }}
                                accept='image/png, image/jpeg'
                                className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                              />
                            </div>
                          </div>
                          <div className='flex flex-col items-start'>
                            <label
                              htmlFor='link'
                              className='block text-sm font-medium leading-6 text-primary'>
                              Product Link
                            </label>
                            <div className='mt-2 w-full'>
                              <input
                                type='text'
                                id='link'
                                name='link'
                                onInput={(e) => {
                                  setLink(e.target.value);
                                }}
                                className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                              />
                            </div>
                          </div>
                          <div className='flex flex-col items-start gap-2'>
                            <label
                              htmlFor='Categories'
                              className='block text-sm font-medium leading-6 text-primary'>
                              Categories
                            </label>
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              defaultValue={[defaultCategories[0]]}
                              isMulti
                              className='w-full'
                              options={defaultCategories}
                              onInput={(e) => {
                                setProdCategories(e.target.value);
                              }}
                            />
                          </div>
                          <div className='pt-2 flex items-center gap-2'>
                            <input
                              id='favorite'
                              name='favorite'
                              type='checkbox'
                              onChange={(e) => {
                                setFavorite(!favorite);
                              }}
                              className='checkbox-round'
                            />
                            <label
                              htmlFor='favorite'
                              className='block text-lg font-medium leading-6 text-primary'>
                              Favorite
                            </label>
                          </div>
                          <div className='pt-4 flex items-center justify-center md:justify-end gap-4'>
                            <input
                              type='reset'
                              value='Reset'
                              className='mt-3 text-red-600 inline-flex w-1/2 justify-center rounded-md bg-red-100 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-primary hover:ring-0 hover:bg-red-600 hover:text-white sm:mt-0 sm:w-auto'
                            />
                            <input
                              type='submit'
                              value='Add wish'
                              className='mt-3 text-secondary inline-flex w-1/2 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-primary hover:ring-0 hover:bg-green-500 hover:text-white sm:mt-0 sm:w-auto'
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:ring-0 hover:bg-secondary hover:text-white sm:mt-0 sm:w-auto'
                    onClick={() => setShowAddWishModal(false)}>
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
