import Image from "next/image";
import pic from "../public/wedoitall.jpg";
import contact from "../public/WedoitallContact.jpg";
import headshot from "../public/headshot1.png";
import NavBar from '../components/NavBar.js';
import Link from 'next/link';
import scaffold from "../public/WDIAscaffold.jpg";




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
            <Image src={scaffold} alt="Company Logo" width={1000} height={780} unoptimized={true} />
          </div>

        </div>

        

        <div className="w-4/5 xl:w-[1080px] mx-auto ">

          <Link href="/shop">
            <button className="w-5/6 h-12 bg-orange-500 border mx-5 font-bold text-xl text-white rounded-lg hover:bg-orange-600 ">SHOP SAFETY & EQUIPMENT</button>
          </Link>

          <h1 className="mt-12 text-xl font-bold">Building Excellence for Over 25 Years</h1>
          <p>"We Do It All," a distinguished over 25 years of unwavering commitment to construction excellence. Our rich legacy in the construction sector speaks to our steadfast dedication to safety, innovation, and customer satisfaction.</p>
          
          
          <h1 className="mt-12 text-xl font-bold">Why Choose We Do It All?</h1>

          <p>"We Do It All" stands as a beacon of progress in the scaffolding industry, driven by a passion for transforming challenges into opportunities. As pioneers of next-generation scaffold services, we prioritize safety by introducing innovative products that minimize risks and optimize efficiency. Our holistic approach ensures your project is not just built—it's elevated to new heights of success.</p>

          <h1 className="mt-12 text-xl font-bold">Our Commitment to You:</h1>

          <p>At "We Do It All," we understand the importance of putting our clients first. Our personalized, reliable, and on-time services are designed to simplify your construction journey, making it not only safe but also stress-free. With a focus on precision and quality, we elevate your projects to new levels of success.</p>


          <h1 className="mt-12 text-xl font-bold">We Do It All Scaffolding Services Include:</h1>
          <ul className="list-disc list-outside ms-8 text-left mx-auto max-w-2xl">
            <li>Advanced System Scaffold: Tailored solutions for enhanced safety and efficiency.</li>              
            <li>Expert Shoring/Re-shoring: Supporting your structures with precision and reliability.</li>
            <li>Dynamic Dance Floors: Creating stability and versatility for various project needs.</li>
            <li>Innovative Stair Towers: Elevating accessibility and safety on every level.</li>
            <li>Stage Construction: Crafting platforms for your events or project requirements.</li>
            <li>Secure Landing Platforms: Ensuring stability and safety at critical points.</li>
            <li>Efficient Speedy Scaff: Rapid deployment for time-sensitive projects.</li>
            <li>Public Access Solutions: Customized access solutions for public spaces.</li>
            <li>Sidewalk Canopies: Blending safety with aesthetic appeal.</li>
          </ul> 
          
        
          <h1 className="mt-12 text-xl">Choose "We Do It All" for a scaffolding partner that goes beyond industry standards, offering you a solid foundation for success in every construction endeavor. With "We Do It All," your projects are not just built; they're elevated to perfection.</h1>
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
