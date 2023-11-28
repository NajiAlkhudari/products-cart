import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import useFetchData from '../hooks/useFetchData';
import { Link } from 'react-router-dom';

const Products = () => {
  const { fetchData, isLoading, data } = useFetchData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (productId) => {
    console.log(`Card clicked! Product ID: ${productId}`);
  };

  const uniqueCategories = Array.from(new Set(data.map((product) => product.category)));
  const uniqueCompanies = Array.from(new Set(data.map((product) => product.company)));

  const filteredProducts = data.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const companyMatch = selectedCompany === 'all' || product.company === selectedCompany;
    return categoryMatch && companyMatch;
  });

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedCompany('all');
  };

  return (
    <>
      <div className='w-full flex flex-row'>
        <div className='flex flex-col pl-44 pt-10 '>
          <label>
            Category:{' '}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value='all'>All</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Company{' '}
            <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
              <option value='all'>All</option>
              {uniqueCompanies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </label>
          <button className='bg-red-600 text-white rounded-sm mt-14' onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>

        <div className='flex flex-wrap justify-start pl-30 gap-4 p-4'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <Link to={`/product/${product.id}`}>
                  <Card
                    imageUrl={product.image}
                    title={product.name}
                    subtitle={`$${product.price / 100}`}
                    onClick={() => handleCardClick(product.id)}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
