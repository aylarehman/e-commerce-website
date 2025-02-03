import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
    return (
        <div>
            <FaStar size={16} color="gold" />
            <div className="w-[1440px] h-[60px] bg-black flex">
                <div className="w-[859px] h-full flex text-white text-[14px] items-center relative pl-[445px]">
                    <div className="w-[550px] h-full flex items-center">
                        <p className="w-[794px] text-center leading-[12px] gap-[98px] font-normal pt-2 pl-38 text-[14px]">
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </p>
                        <p className="font-semibold ml-38 flex gap-x-6 underline">Shop Now</p>
                    </div>
                    <select name="English" id="English" className="w-[78px] bg-black text-white h-[24px] mt-[12px] pt-2 ml-24 flex">
                        <option value="English">English</option>
                    </select>
                </div>
            </div>

            {/* leftside */}
            <div className="text-3xl h-[48px] w-[1170px] ml-[135px] mt-[88px] gap-[130px] justify-center font-bold">
                {/* logo */}
                <h1 className="gap-[48px] h-[24px] font-inter font-[700] w-[118px] mr-40">Exclusive</h1>
            </div>

            {/* rightside */}
            <div>
                <ul className="flex h-[24px] w-[118px] gap-[48px] ml-48">
                    <li>
                        <Link className="hover:underline text-[16px] text-center w-[48px] h-[14px] font-normal" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="hover:underline text-[16px] text-center w-[48px] h-[14px] font-normal" href={"/About"}>About</Link>
                    </li>
                    <li>
                        <Link className="hover:underline text-[16px] text-center w-[48px] h-[14px] font-normal" href={"/Contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link className="hover:underline text-[16px] text-center w-[48px] h-[14px] font-normal" href={"/SignUp"}>SignUp</Link>
                    </li>
                </ul>
                <div className="justify-end items-center space-x-2 flex">
                    <button className="w-[230px] h-[39px] rounded-[4px] flex pl-[20px] pt-[17px] pr-[12px] bg-white pb-[7px]">
                        <input type="text" placeholder="What are you looking for?" className="w-[135px] h-[18px] text-black flex font-poppins font-normal opacity-[50%] text-[12px]" />
                        <IoIosSearch className="w-[16px] h-[16px]" />
                    </button>
                    <FaRegHeart className="w-[17px] h-[16px]" />
                    <FaRegUserCircle className="w-[20px] text-red-500 h-[10px]" />
                    <MdOutlineShoppingCart className="w-[9px] h-[9px]" />
                </div>
            </div>
        </div>
    );
}
export default Header;
