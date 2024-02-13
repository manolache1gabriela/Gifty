import { useEffect, useState } from 'react';
import NoWish from './NoWish';
import Wishes from './Wishes';
import { useParams } from 'react-router-dom';
import PaginationWishes from './PaginationWishes';
import { Skeleton, Stack } from '@mui/material';
export default function Wishlist() {
  const token = localStorage.getItem('token');
  const [isOwner, setIsOwner] = useState(false);
  const [wishes, setWishes] = useState<
    [
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
    ]
  >([
    {
      id: 0,
      image: 'string',
      name: 'string',
      link: 'string',
      price: 0,
      claimer: { avatar: 'string' },
      quantity: 0,
      is_favorite: false,
      is_claimed: false,
    },
  ]);
  const [pageLinks, setPageLinks] = useState([]);
  const [wishlistCategories, setWishlistCategories] = useState<
    [{ name: string }]
  >([{ name: 'all' }]);
  const [wishlistOwner, setWishlistOwner] = useState({ name: 'Andrei' });
  const [pageNumber, setPageNumber] = useState(1);
  const userId = useParams().id;
  async function fetchWishes() {
    const response = await fetch(
      `http://192.168.100.33:8080/api/wishes/${userId}?page=${pageNumber}`,
      {
        headers:
          token !== null
            ? {
                authorization: `Bearer ${token}`,
              }
            : {},
      }
    );
    const result = await response.json();
    const { categories, wishes, is_owner: isOwner, owner } = result.data;
    setWishlistCategories(categories);
    setIsOwner(isOwner);
    setPageLinks(wishes.links);
    setWishes(wishes.data);
    setWishlistOwner(owner);
  }
  useEffect(() => {
    fetchWishes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  function getWish(index: number) {
    const objectPage: { url: string } = pageLinks[index];
    if (objectPage.url === null) {
      return 1;
    }
    const url = new URL(objectPage.url ?? '');

    const page = url.searchParams.get('page');
    setPageNumber(Number(page));
  }

  return (
    <div className='w-full flex flex-col justify-center items-center py-10 min-h-[70vh]'>
      {!wishes && <NoWish fetchWishes={fetchWishes} />}
      {wishes ? (
        <div className='flex flex-col w-full items-center gap-5'>
          <Wishes
            wishes={wishes}
            isOwner={isOwner}
            categories={wishlistCategories}
            wishlistOwner={wishlistOwner}
            fetchWishes={fetchWishes}
          />
          <PaginationWishes getWish={getWish} pageLinks={pageLinks} />
        </div>
      ) : (
        <div className='flex w-full items-center gap-5'>
          <Stack
            className='w-full px-[5%] flex items-start justify-center gap-8'
            spacing={1}>
            <div className='flex items-center gap-4'>
              <Skeleton variant='circular' width={64} height={64} />
              <Skeleton variant='text' width={190} sx={{ fontSize: '3rem' }} />
            </div>

            <div className='flex flex-wrap gap-8'>
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
              <Skeleton variant='rounded' width={360} height={160} />
            </div>
          </Stack>
        </div>
      )}
    </div>
  );
}
