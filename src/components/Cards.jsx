import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-8 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='card-area1'>
                <img className='card-img' src={Single} alt='/' />
                <h2 className='plan-type'>Solo</h2>
                <p className='price'>₱8,640</p>
                <p className='per-m'>/month</p>

                <div className='features'>
                    <p className='plan-p mt-8'>500GB Storage</p>
                    <p className='plan-p'>1 Permitted User</p>
                    <p className='plan-p'>2GB Transfer Limit</p>
                </div>

                <a className='button1 mx-auto px-6' href='#'>
                    Start Trial
                </a>
            </div>

            <div className='card-area2'>
                <img className='card-img' src={Double} alt='/' />
                <h2 className='plan-type'>Team</h2>
                <p className='price'>₱11,540</p>
                <p className='per-m'>/month</p>

                <div className='features'>
                    <p className='plan-p mt-8'>1TB Storage</p>
                    <p className='plan-p'>3 Permitted Users</p>
                    <p className='plan-p'>10GB Transfer Limit</p>
                </div>

                <a className='button2 mx-auto px-6' href='#'>
                    Start Trial
                </a>
            </div>

            <div className='card-area1'>
                <img className='card-img' src={Triple} alt='/' />
                <h2 className='plan-type'>Enterprise</h2>
                <p className='price'>₱17,340</p>
                <p className='per-m'>/month</p>

                <div className='features'>
                    <p className='plan-p mt-8'>5TB Storage</p>
                    <p className='plan-p'>10 Permitted Users</p>
                    <p className='plan-p'>20GB Transfer Limit</p>
                </div>

                <a className='button1 mx-auto px-6' href='#'>
                    Start Trial
                </a>
            </div>
        </div>
    </div>
  )
}

export default Cards