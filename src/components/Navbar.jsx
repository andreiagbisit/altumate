import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };
    
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 text-white relative z-30'>
            <h1 className='logo-area'>
                <a className='logo' href='#'>
                    altumate<span className='text-white'>.</span>
                </a>
            </h1>

            <ul className='hidden md:flex'>
                <li className='p-4'><a className='nav-a-desktop' href='#'>Home</a></li>
                <li className='p-4'><a className='nav-a-desktop' href='#'>Company</a></li>
                <li className='p-4'><a className='nav-a-desktop' href='#'>Resources</a></li>
                <li className='p-4'><a className='nav-a-desktop' href='#'>About</a></li>
                <li className='p-4'><a className='nav-a-desktop' href='#'>Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden hover:text-rose-600 duration-300'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-stone-900 bg-[#000300] ease-in-out duration-500 z-40' : 'fixed left-[-100%]'}>
                <h1 className='logo-area m-8'>
                    <a className='logo' href='#'>
                        altumate<span className='text-white'>.</span>
                    </a>
                </h1>

                <ul className='uppercase p-4'>
                    <li className='nav-li-nth'><a className='nav-a-mobile' href='#'>Home</a></li>
                    <li className='nav-li-nth'><a className='nav-a-mobile' href='#'>Company</a></li>
                    <li className='nav-li-nth'><a className='nav-a-mobile' href='#'>Resources</a></li>
                    <li className='nav-li-nth'><a className='nav-a-mobile' href='#'>About</a></li>
                    <li className='p-4'><a className='nav-a-mobile' href='#'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar