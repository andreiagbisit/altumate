import { ReactTyped } from "react-typed";
import Video from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className='relative text-white'>
        <video className='fixed top-0 left-0 w-full h-full object-cover opacity-30 -z-10'
               src={Video} autoPlay loop muted playsInline>    
        </video>

        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative z-10'>
            <p className='text-rose-600 font-bold p-2'>
                ANALYTICS IN ACTION
            </p>
            
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Elevate with data.
            </h1>

            <div className='flex justify-center items-center'>
                <p className='hero-p py-4'>
                    Scalable financing for
                </p>

                <ReactTyped 
                    className='hero-p md:pl-4 pl-2' 
                    strings={['B2B', 'B2C', 'SaaS']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                />
            </div>

            <p className='md:text-2xl text-xl font-bold text-stone-500'>
                Leverage data-driven analytics to accelerate B2B, B2C, & SaaS platforms.
            </p>

            <a className='button1 mx-auto' href='#'>
                Get Started
            </a>
        </div>
    </div>
  )
}

export default Hero