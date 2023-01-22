import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl text-[rgb(212,223,0)] font-bold ">
				PORTFOLIO
			</h1>
			<ul className="flex hidden">
				<li className="p-4">Home</li>
				<li className="p-4">About</li>
				<li className="p-4">Projects</li>
			</ul>
			<div onClick={handleNav}>
                { !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
			</div>
			<div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-black">
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
