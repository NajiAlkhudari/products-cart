import React from 'react';
import Button from '../components/ui/Button';

const Cart = ({ cart }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        {cart && cart.length > 0 ? (
          <div className='px-36 py-10'>
          <table className="table-auto w-full border-collapse ">
            <thead>
              <tr>
                <th className="border-b-2 text-gray-600 font-thin px-4 py-2">Item</th>
                <th className="border-b-2 text-gray-600 font-thin  px-4 py-2">Price</th>
                <th className="border-b-2 text-gray-600 font-thin px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="">{item.name}</td>
                  <td className="">${item.price}</td>
                  <td className="">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex flex-row pt-10 justify-between items-center'>
          <div className=''>
            <Button className='bg-yellow-900 px-2 py-0.5 text-white rounded-t-lg'>continue shop</Button>
          </div>
          <div className=''>
            <Button className='bg-black px-2 py-0.5 text-white rounded-lg'>clear shopping cart</Button>
          </div>
            </div>
        
          </div>
        ) : (
          <p>The cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
