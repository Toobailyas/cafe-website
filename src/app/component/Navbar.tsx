"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    return(
        <div className="fixed top-0 left-0 w-full text-white p-4 z-50">
            <nav className="bg-[#121212] lg:py-4 text-white h-14.5 py-2 px-3 flex justify-between flex-wrap items-center  sm:h-14 md:h-16 lg:h-16">
                <div className="flex items-center mb-3">
                    <a href="#!">
                    <Image className="rounded-full h-10 w-10 " alt="logo" src="/logo.jpg" 
                    height={10}
                    width={10}
                    quality={100}
                    />
                </a>
                <p className="ml-3 text-xs mr-3">TOOBA ILYAS</p>
                </div>
                
                <div>
                    <ul className="flex space-x-9">
                        <li className="menuLink">
                            <a href="#hero" className="hover:text-orange-700">Home</a>
                        </li>
                        <li className="menuLink">
                        <a href="#contact"  className="hover:text-orange-700">Contact</a>
                        </li>
                        <li className="menuLink">
                        <a href="#product"  className="hover:text-orange-700">Product</a>
                        </li>
                        <li className="menuLink">
                        <a href="#ourstory"  className="hover:text-orange-700">Our Story</a>
                            </li>
                    </ul>
                </div>
            </nav>

        </div>
    )

}

export default Navbar;