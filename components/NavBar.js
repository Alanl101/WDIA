import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/wedoitalllogo.jpg';

const NavBar = () => {
    return(
        <main>
            <div className="fixed top-0 h-28 w-screen 
                            flex justify-center items-center grid grid-cols-3
                            text-zinc-50 border-b shadow-md">
                <div>
                    <Image src={logo} alt="Company Logo" width={180} height={160} />
                    
                </div>

                <div>
                    <h1 className=' text-xl text-black font-semibold'>WE DO IT ALL</h1>
                </div>

                <div className='relative flex text-center justify-end h-16 mx-8 tracking-[.20em] text-black hover:font-semibold hover:text-orange-400 '>
                    <button>Login</button>
                </div>
                
            </div>
        </main>
    );
};

export default NavBar;