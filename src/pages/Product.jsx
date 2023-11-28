import React, { useEffect } from 'react';
import useFetchProduct from '../hooks/useFetchProduct';
import { useParams , useNavigate  } from 'react-router-dom';

import Card from '../components/ui/Card';
import StarRating from '../components/ui/StarRating';
import Button from '../components/ui/Button';

const Product = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  const { id } = useParams();
  const { fetchData, data, isLoading } = useFetchProduct();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
    <div>
    <Button className='bg-yellow-900 hover:bg-yellow-800 text-white mx-20 px-8 py-2 rounded-lg my-5'
    onClick={handleClick}> 
  BACK TO PRODUCTS
</Button>
    </div>
    <div className='flex flex-row'>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='pt-8 flex w-1/2 px-8'>
            <Card imageUrl={data.images[0].url} />
          </div>

          <div className='flex flex-col w-1/4 mt-8'>
            <p className='font-bold'>{data.name}</p>
            <p className='text-orange-400'>
              <StarRating stars={data.stars} />
            </p>
            <span className='text-yellow-700'>{data.price}$</span>

            <p>{data.description}</p>
            {/* <button onClick={() => addToCart(data)}>Add to Cart</button> */}
            <Button className='bg-yellow-900 hover:bg-yellow-800 text-white mx-20 py-2 rounded-lg my-5' 
            onClick={() => addToCart(data)}
            >
ADD TO CART            </Button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Product;
