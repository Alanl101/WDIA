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
    
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-32 mx-6 h-screen-64'>
    
              <div className='flex w-full mt-12 items-center justify-center sm:mx-auto md:mx-auto'>
                <h1 className="text-5xl text-center text-secondary font-bold"> All Your Construction Needs In One Place </h1>
              </div>
    
            </div>
    
            <div>
            </div>
    
            <div className="grid sm:grid-cols-1">
              {productData.map((product, index) => (
                <ProductCard key={index} image={product.image} title={product.title} description={product.description} />
              ))}
            </div>
    
    
    
            
          </div>
          <NavBar />
        </main>
      );
}

export default Shop;
