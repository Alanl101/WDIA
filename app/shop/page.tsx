import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import productData from '../../components/productData';
import ProductCard from "../../components/ProductCard";
import NavBar from '../../components/NavBar.js';


function Shop() {
    return (
        <main className="min-h-screen text-center">
    
          <title>We do it all</title>
    
          <div id="svg-img" className="xl:h-screen lg:h-full md:h-full sm:h-max min-h-screen justify-items-center">
              <div className='grid grid-cols-1 my-32 mx-6 h-screen-64'>
                <h1 className="mt-12 text-xl font-bold">SHOP</h1>
              </div>
      
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {productData.map((product, index) => (
                  <ProductCard key={index} image={product.image} title={product.title} />
                ))}
              </div>    
    
            
          </div>
          <NavBar />
        </main>
      );
}

export default Shop;
