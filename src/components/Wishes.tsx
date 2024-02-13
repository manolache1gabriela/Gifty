import { useState } from 'react';
import Wish from './Wish';
import AddWishModal from './AddWishModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import EditWish from './EditWish';

interface Wishes {
  wishes: [
    {
      id: number;
      image: string;
      name: string;
      link: string;
      price: number;
      claimer: { avatar: string };
      quantity: number;
      is_favorite: boolean;
      is_claimed: boolean;
    }
  ];
  isOwner: boolean;
  categories: [{ name: string }];
  wishlistOwner: { name: string };
  fetchWishes: () => void;
}

export default function Wishes({
  isOwner,
  categories,
  wishes,
  wishlistOwner,
  fetchWishes,
}: Wishes) {
  const [showAddWishModal, setShowAddWishModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className='w-[90%] overflow-hidden flex justify-center flex-col gap-8 items-center font-poppins'>
      <div className='w-full flex justify-between items-center gap-4'>
        <div className='md:w-2/3 flex justify-center items-center md:justify-start gap-4'>
          <img
            className='w-16 h-16 rounded-full border-2 border-primary'
            alt='avatar'
          />
          <p className='text-primary text-center text-xl md:text-3xl'>
            <span className='text-secondary hidden md:inline'>
              {wishlistOwner.name}
            </span>{' '}
            wishes:
          </p>
        </div>
        {isOwner && (
          <div className='flex gap-4 text-secondary text-3xl lg:text-4xl'>
            <FontAwesomeIcon
              className='hover:text-primary cursor-pointer'
              icon={faCirclePlus}
              onClick={() => {
                setShowAddWishModal(true);
              }}
            />
            <AddWishModal
              showAddWishModal={showAddWishModal}
              setShowAddWishModal={setShowAddWishModal}
              fetchWishes={fetchWishes}
            />
          </div>
        )}
      </div>

      <div className='flex w-full justify-start gap-4 '>
        <form method='get'>
          <select
            className='border-2 border-primary rounded-lg p-1 text-center cursor-pointer text-sm text-primary font-semibold'
            name='categories'
            id='categories'>
            {categories.length > 0 &&
              categories.map((category) => (
                <option key={`${category.name}`} value={`${category.name}`}>
                  {category.name}
                </option>
              ))}
          </select>
        </form>
        <form method='get'>
          <select
            className='border-2 border-primary rounded-lg p-1 text-center cursor-pointer text-sm text-primary font-semibold'
            name='order'
            id='order'
            defaultValue='The newest'>
            <option value='new'>The newest</option>
            <option value='alphabetical'>Alphabetical</option>
            <option value='rising'>Rising price</option>
            <option value='declining'>Declining price</option>
          </select>
        </form>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-between gap-8 flex-wrap items-center'>
        {wishes.map((wish) => (
          <Wish
            isOwner={isOwner}
            setShowEdit={setShowEdit}
            key={wish.id}
            wish={wish}
          />
        ))}
        {showEdit && <EditWish showEdit={showEdit} setShowEdit={setShowEdit} />}
      </div>
    </div>
  );
}
