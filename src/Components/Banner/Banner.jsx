
import slide3 from '../../assets/Slider/qqq.jpg'

const Banner = () => {
    return (
        <div className='max-h-[90vh]'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${slide3})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 md:text-5xl  text-yellow-500 font-neon font-bold">Buy Your Dream Car</h1>
                        <p className="mb-5 md:text-xl font-neon">Your dream car is an elegant, high-performance luxury vehicle. Its timeless design, advanced technology, and exceptional comfort make every drive a luxurious escape, turning every journey into an unforgettable experience.</p>
                        <button className="btn btn-warning text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;