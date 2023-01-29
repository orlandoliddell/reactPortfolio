import React from "react"
import Typed from "react-typed"

const Home = () => {
	return (
		<div className="relative items-center justify-center flex">
			<div className="absolute blur-3xl opacity-10  sm:w-100 sm:h-100 w-72 h-72 bg-amber-200 rounded-full "></div>
			<div className="text-[rgb(212,223,0)] font-bold max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className=" relative lg:text-5xl sm:text-3xl sm:py-3 sm:ease-in-out duration-500 text-2xl">
					PROFESSIONAL IN TRAINING
				</p>
				<div>
					<h1 className="relative text-gray-500 p-2 lg:text-3xl sm:text-2xl sm:py-3 sm:ease-in-out duration-500 text-xl">
						I can code with
						<Typed
							className="px-2 text-white"
							strings={["HTML", "CSS", "JS", "REACT"]}
							typeSpeed={120}
							backSpeed={140}
							loop
						/>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default Home
