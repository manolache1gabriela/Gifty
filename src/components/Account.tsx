import { useEffect, useState } from 'react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import EditAccount from './EditAccount';

export default function Account() {
  const [image, setImage] = useState(false);
  const [showEditAccountModal, setShowEditAccountModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // console.log(user);
  function toggleEdit() {
    setShowEditAccountModal(!showEditAccountModal);
  }

  useEffect(() => {
    if (user?.avatar !== null) {
      setImage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full pt-8 flex flex-col font-poppins justify-center items-center min-h-[70vh]'>
      <h3 className='text-3xl lg:text-4xl text-primary'>Hello, {user.name}!</h3>
      <div className='w-full flex flex-col md:flex-row justify-center gap-8 items-center py-10'>
        <div className='w-40 h-40 relative rounded-full overflow-hidden border-4 border-secondary '>
          {image && (
            <img className='h-full' src={`${user?.avatar}`} alt='avatar' />
          )}
          {!image && (
            <div
              onClick={toggleEdit}
              className='absolute w-full h-full text-secondary hover:text-white bg-primary bg-opacity-30 hover:bg-opacity-90 top-0 left-0 flex items-center justify-center'>
              <FontAwesomeIcon size='2xl' icon={faImage} />
            </div>
          )}
        </div>
        <div className='w-[90%] md:w-[40%] flex flex-col items-center md:items-start justify-center gap-8'>
          <div className='w-full flex flex-col justify-center md:justify-start gap-8 items-center'>
            <div className='w-full bg-primary bg-opacity-30 p-4 rounded-lg flex flex-col justify-center items-start gap-2 text-primary text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] '>
              <p className='w-full flex gap-2 justify-start items-center'>
                <span>Name:</span>
                <span className='font-semibold'>{user?.name}</span>
              </p>
              <p className='w-full flex gap-2 justify-start items-center'>
                <span>Email:</span>
                <span className='truncate font-semibold'>{user?.email}</span>
              </p>
              <p className='w-full flex gap-2 justify-start items-center'>
                <span>Birthday:</span>
                <span className='font-semibold'>
                  {user?.birth_date ? user?.birth_date : 'not provided'}
                </span>
              </p>
              <div className='w-full mt-4 flex justify-center items-center'>
                <button
                  onClick={toggleEdit}
                  className='flex font-semibold text-primary hover:text-white items-center justify-center text-lg border-b-2 border-primary hover:border-white'>
                  Edit data
                </button>
              </div>
            </div>
          </div>
          {/* <div className='w-full flex flex-col text-white bg-secondary p-4 gap-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] justify-center items-center'>
            <h4 className='text-2xl font-semibold'>Friends:</h4>
            <div className='w-full flex flex-col justify-center items-center gap-2'>
              <ul className='w-full max-h-32 lg:max-h-48 overflow-y-scroll no-scrollbar flex flex-col gap-4'>
                <li className='flex items-center text-lg justify-between gap-4'>
                  <div className='flex gap-4'>
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                    <button className='hover:text-primary'>Claudius</button>
                  </div>
                  <button className='justify-self-end hover:text-primary'>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
                <li className='flex items-center text-lg justify-between gap-4'>
                  <div className='flex gap-4'>
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                    <button className='hover:text-primary'>Claudius</button>
                  </div>
                  <button className='justify-self-end hover:text-primary'>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
                <li className='flex items-center text-lg justify-between gap-4'>
                  <div className='flex gap-4'>
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                    <button className='hover:text-primary'>Claudius</button>
                  </div>
                  <button className='justify-self-end hover:text-primary'>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
                <li className='flex items-center text-lg justify-between gap-4'>
                  <div className='flex gap-4'>
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                    <button className='hover:text-primary'>Claudius</button>
                  </div>
                  <button className='justify-self-end hover:text-primary'>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
                <li className='flex items-center text-lg justify-between gap-4'>
                  <div className='flex gap-4'>
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                    <button className='hover:text-primary'>Claudius</button>
                  </div>
                  <button className='justify-self-end hover:text-primary'>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </li>
              </ul>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div> */}
        </div>
      </div>
      <EditAccount
        showEditAccountModal={showEditAccountModal}
        setShowEditAccountModal={setShowEditAccountModal}
        toggleEdit={toggleEdit}
      />
    </div>
  );
}
