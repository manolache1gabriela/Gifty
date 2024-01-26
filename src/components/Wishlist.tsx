import { useEffect, useState } from 'react';
import NoWish from './NoWish';
import Wishes from './Wishes';
import { useParams } from 'react-router-dom';
export default function Wishlist() {
  const [wished, setWished] = useState(false);

  const token = localStorage.getItem('token');
  const [isOwner, setIsOwner] = useState(false);
  const [wishes, setWishes] = useState({});
  const [categories, setCategories] = useState([]);
  const [owner, setOwner] = useState({});
  const userId = useParams().id;
  async function fetchWishes() {
    let response = await fetch(
      `http://192.168.100.33:8080/api/wishes/${userId}`,
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
    console.log(wishes, response.data);
    setCategories(categories);
    setIsOwner(isOwner);
    setWishes(wishes.data);
    setOwner(owner);
    if (wishes.data.length > 0) {
      const hasWishes = true;
      setWished(hasWishes);
    }
  }
  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <div className='w-full flex justify-center items-center py-10 min-h-[70vh]'>
      {!wished && <NoWish />}
      {wished && (
        <Wishes
          wishes={wishes}
          isOwner={isOwner}
          categories={categories}
          owner={owner}
        />
      )}
    </div>
  );
}
