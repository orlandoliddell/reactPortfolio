import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full lg:text-5xl sm:text-3xl sm:py-3 sm:ease-in-out duration-500 text-2xl text-[rgb(212,223,0)] font-bold m-4">
				PORTFOLIO
			</h1>
			<ul className="hidden md:flex">
				<li className="p-4">Home</li>
				<li className="p-4">About</li>
				<li className="p-4">Projects</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden">
				{!nav ? (
					<AiOutlineClose size={20} />
				) : (
					<AiOutlineMenu size={20} />
				)}
			</div>
			<div
				className={
					!nav
						? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-black ease-in-out duration-500"
						: "fixed left-[100%] top-0 w-[60%] h-full border-r border-r-gray-400 bg-black ease-in-out duration-500"
				}
			>
				<h1 className="w-full text-3xl text-[rgb(212,223,0)] font-bold m-4">
					PORTFOLIO
				</h1>
				<ul className="uppercase p-4">
					<li className="p-4 border-b border-b-gray-500">Home</li>
					<li className="p-4 border-b border-b-gray-500">About</li>
					<li className="p-4 border-b border-b-gray-500">Projects</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
