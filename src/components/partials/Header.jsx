import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
const Header = () => {
  return (
    <header className="bg-white p-4">
    <div className="container px-52 flex flex-col md:flex-row justify-between items-center">
      <div className="text-white text-xl font-bold mb-4 md:mb-0">
          <span className="text-black font-abc ">Cpmfy</span>
          <span className="text-orange-200 font-abc">sloth</span>
        </div>

      
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
      <a href="#" className="text-black">Home</a>
        <a href="#" className="text-black">About</a>
        <Link to ="products" className="text-black">Product </Link>
      </nav>

      <nav>
      <Link to ="cart" className="inline-flex items-center text-black">
        Cart <Icon icon="ion:cart-sharp" />
       </Link> 
       
         <a href="#" className="text-black">Login</a>
      </nav>
    </div>

  </header>
  )
}

export default Header
