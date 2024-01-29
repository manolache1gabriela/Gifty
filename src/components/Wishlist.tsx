import { useEffect, useState } from 'react';
import NoWish from './NoWish';
import Wishes from './Wishes';
import { useParams } from 'react-router-dom';
import PaginationWishes from './PaginationWishes';
export default function Wishlist() {
  const [wished, setWished] = useState(false);

  const token = localStorage.getItem('token');
  const [isOwner, setIsOwner] = useState(false);
  const [wishes, setWishes] = useState([]);
  const [pageLinks, setPageLinks] = useState([]);
  const [wishlistCategories, setWishlistCategories] = useState([]);
  const [wishlistOwner, setWishlistOwner] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const userId = useParams().id;
  async function fetchWishes() {
    try {
      let response = await fetch(
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
      response = await response.json();
      const { categories, wishes, is_owner: isOwner, owner } = response.data;
      setWishlistCategories(categories);
      setIsOwner(isOwner);
      console.log(wishes);
      setPageLinks(wishes.links);
      setWishes(wishes.data);
      setWishlistOwner(owner);
      if (wishes.data.length > 0) {
        const hasWishes = true;
        setWished(hasWishes);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWishes();
  }, [pageNumber]);

  function getWish(index: number) {
    const object = pageLinks[index];
    if (object.url === null) {
      return 1;
    }
    const url = new URL(object.url ?? '');

    const page = url.searchParams.get('page');
    setPageNumber(page);
  }

  return (
    <div className='w-full flex justify-center items-center py-10 min-h-[70vh]'>
      {!wished && <NoWish fetchWishes={fetchWishes} />}
      {wished && (
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
      )}
    </div>
  );
}
