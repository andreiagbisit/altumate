import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />

            <div className='flex flex-col justify-center sm:align-middle'>
                <p className='text-rose-600 font-bold'>
                    DATA ANALYTICS DASHBOARD
                </p>
                
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Control Data Analytics Seamlessly
                </h1>
                
                <p>
                    Manage and organize your analytics in one secure hub. Streamline insights,
                    enhance collaboration, and simplify reporting across teams and platforms 
                    for faster, smarter decisions driven by unified, centralized data access 
                    and management tools.
                </p>

                <a className='button2 mx-auto md:mx-0' href='#'>
                    Get Started
                </a>
            </div>
        </div>
    </div>
  )
}

export default Analytics