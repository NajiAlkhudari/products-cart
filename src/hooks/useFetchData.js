import { useState } from "react";
import axios from "axios";

const useFetchdata = () => {

const [data, setData] = useState([
    {
      id: 0,
      name: " ",
      price: 0,
      image: " ",
      featured: false,
      colors: [],
      company: " ",
      description: " ",
      category: " ",
      shipping: " ",
    },
  ]);
const [isLoading, setIsLoading] = useState(false);

const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://course-api.com/react-store-products');
      setData(response.data);
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

export default useFetchdata;
