import { useState } from 'react';
import axios from 'axios';

const useFetchProduct = () => {
    const [data, setData] = useState({
        id: 0,
        name: '',
        price: 0,
        images : [{}],
        shipping : "",
        description : " ",
        stars : "" ,
        quantity : 0,
      });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://course-api.com/react-store-single-product?id=${id}`);
      setData(response.data);
    console.log(response.data)
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return {
    fetchData,
    data,
    isLoading,
  };
};

export default useFetchProduct;
