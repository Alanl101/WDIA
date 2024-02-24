import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: any;
  title: string;
  description: string;
  // Add more props as needed
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 border border-grey-500  max-w-sm p-4 rounded mx-auto my-auto hover:shadow-lg transition duration-300">
      <h1 className="text-orange-600 text-xl font-bold ">{title}</h1>
      <div className="mt-4"> 
        <Image src={image} alt="Product" width={200} height={200} unoptimized={true} />
      </div>
      <div className="font-semibold p-3 bg-gradient-to-b from-gray-100 to-white rounded mt-2">
        {description}
      </div>
    </div>
  );
};

export default ProductCard;
