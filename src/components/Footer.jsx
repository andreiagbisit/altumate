import {
    FaSquareFacebook,
    FaSquareInstagram,
    FaSquareXTwitter,
    FaLinkedin,
    FaSquareGithub,
} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#000300] pb-16'>
        <div className='max-w-[1240px] mx-auto py-16 px-8 lg:px-4 grid lg:grid-cols-3 gap-8 text-stone-300'>
            <div>
                <h1 className='logo-area'>
                    <a className='logo' href='#'>
                        altumate<span className='text-white'>.</span>
                    </a>
                </h1>

                <p className='py-4'>
                    Altumate empowers businesses with intelligent data solutions, streamlining 
                    analytics and automation to drive smarter, faster, and scalable growth.
                </p>

                <div className='flex justify-between md:w-[75%] md:mx-auto lg:mx-0 my-6'>
                    <a className='footer-icon' href='#'><FaSquareFacebook size={30} /></a>
                    <a className='footer-icon' href='#'><FaSquareInstagram size={30} /></a>
                    <a className='footer-icon' href='#'><FaSquareXTwitter size={30} /></a>
                    <a className='footer-icon' href='#'><FaLinkedin size={30} /></a>
                    <a className='footer-icon' href='#'><FaSquareGithub size={30} /></a>
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='footer-h6'>Solutions</h6>
                    
                    <ul>
                        <li className='footer-li'><a className='footer-a' href='#'>Analytics</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Marketing</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Commerce</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Insights</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className='footer-h6'>Support</h6>
                    
                    <ul>
                        <li className='footer-li'><a className='footer-a' href='#'>Pricing</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Documentation</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Guides</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>API Status</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className='footer-h6'>Company</h6>
                    
                    <ul>
                        <li className='footer-li'><a className='footer-a' href='#'>About</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Blog</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Press</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Career</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className='footer-h6'>Legal</h6>
                    
                    <ul>
                        <li className='footer-li'><a className='footer-a' href='#'>Claim</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Policy</a></li>
                        <li className='footer-li'><a className='footer-a' href='#'>Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <hr className='max-w-[1240px] text-stone-600 mx-8 md:mx-8 lg:mx-auto lg:px-8'></hr>

        <p className=' text-stone-600 text-center pt-5'>
            created by <span className=' font-bold'>drei</span>. 2025
        </p>
    </div>
  )
}

export default Footer