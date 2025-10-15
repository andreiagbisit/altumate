const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-[#000300] text-white px-8'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Need smarter ways to improve workflow?
                </h1>

                <p>
                    Subscribe to our newsletter for the latest updates.
                </p>
            </div>

            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='bg-white p-3 flex w-full rounded-md text-black' 
                           type='email' 
                           placeholder='Enter Email' />

                    <a className='button1 ml-4 px-6' href='#'>
                        Subscribe
                    </a>
                </div>

                <p>
                    We value your privacy. Learn more in our <a className='text-rose-600 hover:text-stone-500 duration-300' href='#'>Privacy Policy.</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter