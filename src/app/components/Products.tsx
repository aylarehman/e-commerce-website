import React from 'react';
import Image from 'next/image'; // Import Image for Next.js

// Products Component
function Products() {
  return (
    <main>
      <div className="w-full h-[300px] mb-[30px] mt-10 pt-20 flex justify-center items-center">
        <div className="w-[80%] h-full">
          {/* topside */}
          <div>
            <span className="border-l-8 border-red-500 mb-20 mt-20 font-bold text-red-500">
              This Month
            </span>
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold mt-4">Best Selling Products View All</h2>
              <button className="py-2 text-white px-5 ml-[500px] rounded-md w-max h-10 mt-5 bg-red-500">
                View All
              </button>
            </div>
          </div>

          {/* Products Container */}
          <div className="flex mt-7 justify-between">
            {/* Product 1 */}
            <div>
              <div className="w-[200px] h-[170px] flex justify-center items-center">
                <Image src="/image/jacket.png" width={150} height={100} alt="gaming" />
              </div>
              {/* Title */}
              <div className="flex flex-col">
                <span className="font-bold pt-3">The North Coat</span>
                <span className="font-bold text-red-500">$260</span>
              </div>
            </div>

            {/* Product 2 */}
            <div>
              <div className="w-[200px] h-[170px] flex justify-center items-center">
                <Image src="/image/bag.png" width={150} height={100} alt="gaming" />
              </div>
              {/* Title */}
              <div className="flex flex-col">
                <span className="font-bold pt-3">Gucci Duffle Bag</span>
                <span className="font-bold text-red-500">$960</span>
                <span className="text-gray-500">$1160</span>
              </div>
            </div>

            {/* Product 3 */}
            <div>
              <div className="w-[200px] h-[170px] flex justify-center items-center">
                <Image src="/image/speaker.png" width={150} height={100} alt="gaming" />
              </div>
              {/* Title */}
              <div className="flex flex-col">
                <span className="font-bold pt-3">RGB Liquid CPU Cooler</span>
                <span className="font-bold text-red-500">$160</span>
              </div>
            </div>

            {/* Product 4 */}
            <div>
              <div className="w-[200px] h-[170px] flex justify-center items-center">
                <Image src="/image/piece.png" width={150} height={100} alt="gaming" />
              </div>
              {/* Title */}
              <div className="flex flex-col">
                <span className="font-bold pt-3">Small Bookshelf</span>
                <span className="font-bold text-red-500">$360</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;

