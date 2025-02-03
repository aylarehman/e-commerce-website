import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa6';

function Hero() {
    return (
        <div className='flex'>
            <div className='grid row-span-1 gap-1 border-black mb-0 pb-0'>
                <div className='w-[217px] h-[334px] mt-16 gap-[16px] ml-[150px] border-black'>
                    <span className='flex'>
                        <p className='font-poppins font-normal text-[16px] h-[24px] w-[135px] mb-4 border-b-2 text-align'>Women's Fashion</p>
                        <FaAngleRight />
                    </span>
                    <span className='flex'>
                        <p className='font-poppins font-normal border-b-2 text-[16px] h-[24px] mb-4 w-[135px] text-align'>Men's Fashion</p>
                        <FaAngleRight />
                    </span>
                    <p className='font-poppins font-normal text-[16px] h-[24px] border-b-2 text-align mb-4'>Electronics</p>
                    <p className='font-poppins font-normal text-[16px] h-[24px] border-b-2 text-align mb-4'>Home & Lifestyle</p>
                    <p className='font-poppins font-normal text-[16px] h-[24px] border-b-2 text-align mb-4'>Medicine</p>
                    <p className='font-poppins font-normal text-[16px] h-[24px] border-b-2 text-align mb-4'>Sports & Outdoor</p>
                    <p className='font-poppins font-normal text-[16px] h-[24px] border-b-2 text-align mb-4'>Baby's & Toys</p>
                    <p className='font-poppins font-normal text-[16px] h-[24px] border-b-2 text-align mb-4'>Groceries & Pets</p>
                    <p className='font-poppins font-normal text-[16px] h-[24px] border-b-2 text-align mb-4'>Health & Beauty</p>
                </div>
            </div>

            {/* Vertical black line to the right of the wishlist with reduced space and aligned with wishlist */}
            <div className='ml-[-10px] mt-20 w-[2px] h-[350px] bg-black'></div> {/* Adjusted the margin-left for less space and aligned line */}

            <div className='flex w-full h-[270px] justify-center mt-0'>
                <div className='bg-black w-[80%] flex h-full justify-between items-center'>
                    {/* Left side */}
                    <div className='ml-8 text-white flex flex-1 flex-col justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <FontAwesomeIcon icon={faApple} className='w-[30px]' />
                            <span className='ml-5'>iPhone 14 Series</span>
                        </div>
                        <div className='w-[200px]'>
                            <h1 className='text-3xl font-bold font-sans mb-6'> {/* Added margin bottom */}
                                Up to 10% off Voucher
                            </h1>
                            <button className='font-bold underline underline-offset-8 ml-5'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='flex flex-1 mt-0 items-center'>
                        <Image
                            src="/image/hero.png"
                            width={350}
                            height={250}
                            alt="Heroimage"
                            className='w-full h-[200px] flex'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
