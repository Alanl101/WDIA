import Image from "next/image";
import pic from "../public/wedoitall.jpg";
import contact from "../public/WedoitallContact.jpg";
import headshot from "../public/headshot1.png";
import ProductCard from "../components/ProductCard";
import NavBar from '../components/NavBar.js';
import productData from '../components/productData';


export default function Home() {

  return (
    <main className="min-h-screen text-center">

      <title>We do it all</title>

      <div id="svg-img" className="xl:h-screen lg:h-full md:h-full sm:h-max min-h-screen justify-items-center">

        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-32 mx-6 h-screen-64'>

          <div className='flex w-full mt-12 items-center justify-center sm:mx-auto md:mx-auto'>
            <h1 className="text-5xl text-center text-secondary font-bold"> All Your Construction Needs In One Place </h1>
          </div>

          <div className="items-center justify-center mt-12">
            <Image src={pic} alt="Company Logo" width={1000} height={780} unoptimized={true} />
          </div>

        </div>

        <div className="grid sm:grid-cols-1">
          {productData.map((product, index) => (
            <ProductCard key={index} image={product.image} title={product.title} description={product.description} />
          ))}
        </div>






        <div className="flex flex-col items-center justify-center mt-4 border border-grey-500 max-w-sm p-4 rounded-lg mx-auto my-auto">
          <Image src={headshot} alt="headshot" width={200} height={200} unoptimized={true} />          
          <div className="font-bold text-green">Need help? Contact us at <p className="text-[#ea580c] font-bold">(863)-205-4771</p></div>
        </div>





        <div className="items-center justify-center mt-4">
          <div className="flex items-center justify-center rounded-md p-2">
            <Image src={contact} alt="Company contact" width={780} height={780} unoptimized={true} />
          </div>
        </div>

      </div>
      <NavBar />
    </main>
  );
}
