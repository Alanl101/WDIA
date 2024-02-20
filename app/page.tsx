import Image from "next/image";
import pic from "../public/wedoitall.jpg"
import NavBar from '../components/NavBar.js';

export default function Home() {
  return (
    <main className="min-h-screen text-center sm:text-left">
      <div id="svg-img" className="xl:h-screen lg:h-full md:h-full sm:h-max min-h-screen flex justify-items-center">

        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full mx-24 my-32 h-screen-64'>

          <div className='flex w-full mt-12 pr-10 h-32 items-center justify-center'>
            <h1 className="text-5xl text-center text-secondary font-bold"> All Your Construction Needs In One Place </h1>
          </div>

          <div>
            <Image src={pic} alt="Company Logo" width={680} height={680} />
          </div>
          {/*<div className='flex w-full h-64 max-w-7xl justify-self-center items-center justify-center border-b-4 border-zinc-200'>
            <p className="text-xl text-secondary font-semibold text-justify mb-8 mt-32">
              Our website is designed to help individuals build a powerful and effective portfolio that will increase their chances of getting hired. In today&apos;s competitive job market, it&apos;s essential to have a portfolio that stands out from the rest. Our platform provides users with the necessary tools and resources to create a portfolio that showcases their unique skills and accomplishments. With our intuitive and user-friendly interface, creating a portfolio has never been easier. 
            </p>
          </div>
          */}          
        </div>

        
      </div>
      <NavBar />
    </main>
  );
}
