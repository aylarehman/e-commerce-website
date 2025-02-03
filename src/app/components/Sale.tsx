import Image from "next/image"

function Sale() {
    return (
        <main>
            <div className="w-full  pt-10 mt-20 flex justify-center items-center">
                <div className="w-[80%] h-full">
                    {/* topside */}
                    <div>
                        <span className="border-l-8 border-red-500 mb-5 font-bold text-red-500">Today’s</span>
                        <h2 className="text-4xl font-bold mt-4">Flash Sales</h2>
                    </div>
                    {/* products */}
                    {/* container boxes */}
                    <div className="flex mt-7 justify-between">
                        <div>
                            <div className="w-[200px] h-[170px] flex justify-center items-center">
                                <Image src="/image/game.png" width={150} height={100} alt="gaming" />
                            </div>
                            {/* title */}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3">HAVIT HV-G92 Gamepad</span>
                                <span className="font-bold text-red-500">120$</span>
                            </div>
                        </div>
                        <div>
                            <div className="w-[200px] h-[170px] flex justify-center items-center">
                                <Image src="/image/keyboard.png" width={150} height={100} alt="gaming" />
                            </div>
                            {/* title */}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3">AK-900 Wired Keyboard</span>
                                <span className="font-bold text-red-500">$960</span>
                                <span className="text-gray-500">$1160</span>
                            </div>
                        </div>
                        <div>
                            <div className="w-[200px] h-[170px] flex justify-center items-center">
                                <Image src="/image/led.png" width={150} height={100} alt="gaming" />
                            </div>
                            {/* title */}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3">IPS LCD Gaming Monitor</span>
                                <span className="font-bold text-red-500">$370 </span>
                            </div>
                        </div>
                        <div>
                            <div className="w-[200px] h-[170px] flex justify-center items-center">
                                <Image src="/image/chair.png" width={150} height={100} alt="gaming" />
                            </div>
                            {/* title */}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3">S-Series Comfort Chair </span>
                                <span className="font-bold text-red-500">$375 </span>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            <button className="py-3 px-3 ml-[500px] text-white rounded-sm mt-6 bg-red-500">View All Products</button>
        </main>

    )
}

export default Sale
