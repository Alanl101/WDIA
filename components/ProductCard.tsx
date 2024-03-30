import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: any;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-2 border border-grey-500  max-w-sm p-4 rounded mx-auto my-auto hover:shadow-lg transition duration-300">
      <h1 className="text-orange-600 text-xl font-bold ">{title}</h1>
      <div className="mt-2"> 
        <Image src={image} alt="Product" width={300} height={360} unoptimized={true} />
      </div>
    </div>
  );
};

export default ProductCard;
