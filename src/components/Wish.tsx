import {
  faCubes,
  faPencil,
  faSackDollar,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useState } from 'react';
interface User {
  isOwner: boolean;
  setShowEdit: (() => boolean) | Dispatch<SetStateAction<boolean>>;
  wish: {
    image: string;
    name: string;
    link: string;
    price: number;
    claimer: { avatar: string };
    quantity: number;
    is_favorite: boolean;
    is_claimed: boolean;
  };
}
export default function Wish({ isOwner, setShowEdit, wish }: User) {
  const [isFavorite] = useState(Boolean(wish.is_favorite));
  const [claimed, setClaimed] = useState(Boolean(wish.is_claimed));
  return (
    <div
      className='relative w-[90%] lg:w-[48%] xl:w-[30%] hover:bg-secondary text-secondary hover:text-white md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center border-4 gap-4 border-primary py-4 px-2 lg:px-4 rounded-3xl font-poppins shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      style={claimed ? { opacity: '0.5' } : undefined}
      onClick={() => {
        if (claimed) {
          setClaimed(false);
        }
        if (!isOwner && !claimed) {
          setClaimed(true);
        }
        return;
      }}>
      <div
        className='w-full md:w-1/3 h-36 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-cover bg-center'
        style={{
          backgroundImage: wish.image
            ? `url("http://192.168.100.33:8080${wish.image}")`
            : `url('https://www.telegraph.co.uk/content/dam/christmas/2022/11/29/TELEMMGLPICT000317870055_trans_NvBQzQNjv4Bqbe775R1SNzm4sSSdJaF7PFKgqRD8QjI0RaZmbYcesHw.jpeg?imwidth=1280')`,
        }}
      />
      <div className='md:w-[45%] flex flex-col justify-center items-center md:text-left md:items-start gap-10 text-center'>
        <a target='_blank' href={`${wish.link}`} className='text-3xl'>
          {wish.name}
        </a>
        <div className='px-2 md:px-0 text-base font-semibold text-primary w-full flex justify-between items-center gap-4'>
          <span>
            <FontAwesomeIcon icon={faSackDollar} size='xl' /> {wish.price} RON
          </span>
          <span>
            <FontAwesomeIcon icon={faCubes} size='xl' /> {wish.quantity}
          </span>
        </div>
      </div>
      <div className='flex justify-between items-center w-full md:w-max md:flex-col-reverse'>
        {wish.claimer && (
          <div
            className='w-10 h-10  rounded-full border-2 border-primary bg-cover bg-center'
            style={{
              backgroundImage: `url("${wish.claimer.avatar}")`,
            }}
          />
        )}
        {isFavorite && (
          <FontAwesomeIcon className='md:mb-6' size='xl' icon={faStar} />
        )}
        {isOwner && (
          <FontAwesomeIcon
            className='hover:text-primary md:mb-6'
            size='lg'
            icon={faPencil}
            onClick={() => {
              setShowEdit(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
