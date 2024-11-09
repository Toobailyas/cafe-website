import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div id="product" className="container ">
      <div>
        <section className="text-white mt-10 border border-x-[#33353F]  ">
          <h2 className="text-white mt-4 text-6xl sm:text-5xl lg:text-6xl font-extrabold flex justify-center items-center ">
            OUR PRODUCTS
          </h2>
          <p className="text-[#ccc8f3fb] m-9 text-base sm:text-lg lg-text-2xl flex justify-center items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            veniam sequi. Praesentium soluta voluptate molestiae.
          </p>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/card/espressoo.png"
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>

                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Coffee
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Espresso
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-orange-800 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                        </a>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative h-48 w-full">
                      <Image
                        src="/card/latte.jpg"
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Coffee
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Latte
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative h-48 w-full">
                      <Image
                        src="/card/iced-coffee.jpg"
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Coffee
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Iced Coffee
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative h-48 w-full">
                      <Image
                        src="/card/Cappuccino.jpg"
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>

                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Coffee
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Cappuccino
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                        </a>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative h-48 w-full">
                      <Image
                        src="/card/espresso-doppio.jpg"
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Coffee
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                      Doppio
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                        </a>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative h-48 w-full">
                      <Image
                        src="/card/Ristretto.jpg"
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Coffee
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                      Ristretto
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                        </a>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Product;
