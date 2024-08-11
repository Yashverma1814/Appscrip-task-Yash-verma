import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import SideNav from './SideNav';

const ProductSection = () => {
    
        const [sortBy, setSortBy] = useState('Recommended');
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [isFilterOpen, setIsFilterOpen] = useState(false)
        const [products,setProducts] = useState([])
        const handleSortChange = (option) => {
          setSortBy(option);
          setIsDropdownOpen(false);
        };
        const handleFilter = () =>{
            setIsFilterOpen(!isFilterOpen)
        }
        useEffect(()=>{
          const fetchProducts = async () => {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              const data = await response.json();
              setProducts(data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
            console.log(products)
          };
      
          fetchProducts();
        },[])
        return (
        <div>
          <div className="header-container">
            <span className="item-count">
                3425 ITEMS
            {isFilterOpen?
            <button className="filter-button" onClick={handleFilter}>&lt;HIDE FILTER</button>:
            <button className="filter-button" onClick={handleFilter}>&gt;SHOW FILTER</button>
            }
            </span>
            <div className="sort-container">
              <button 
                className="sort-button" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {sortBy} ▼
              </button>
              {isDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-item" onClick={() => handleSortChange('Recommended')}>Recommended</div>
                  <div className="dropdown-item" onClick={() => handleSortChange('Newest Arrivals')}>Newest First</div>
                  <div className="dropdown-item" onClick={() => handleSortChange('Popular')}>Popular</div>
                  <div className="dropdown-item" onClick={() => handleSortChange('Price: Low to High')}>Price: Low to High</div>
                  <div className="dropdown-item" onClick={() => handleSortChange('Price: High to Low')}>Price: High to Low</div>
                </div>
              )}
            </div>
          </div>
          
          
          {isFilterOpen?<div className='withNav'>
            <div>
              <SideNav />
            </div>
            <div className="withNavProduct">
            {
              products.map((el)=>{
                return <div key={el.id}>
                  <ProductCard product={el}/>
                </div>
              })
            }
            </div>
          </div>:<div className='withoutNav'>
          {
            products.map((el)=>{
              return <div key={el.id}>
                <ProductCard product={el}/>
              </div>
            })
          }
          </div>}
        </div>
  )
}


  

export default ProductSection
