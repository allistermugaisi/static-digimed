import React from 'react';

const Contact = () => {
	return (
		<div className="pt-16">
			<div class="text-center w-full"></div>
			<div class="container my-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-veryLightGray text-gray-900 rounded-lg shadow-sm">
				<div class="flex flex-col justify-center">
					<div>
						<h2 class="text-2xl lg:text-5xl font-bold text-lightBlue leading-tight">
							Request a call Back.
						</h2>
						<h2 class="text-2xl lg:text-3xl py-4 font-bold leading-tight">
							+254 737 320 000
						</h2>
						<div class="text-gray-700 mt-8">
							Hate forms? Send us an <span class="underline">email</span>{' '}
							instead.
						</div>
					</div>
					<div class="mt-8 text-center"></div>
				</div>
				<div class="">
					<div>
						<span class="uppercase text-sm text-gray-600 font-bold">
							Full Name
						</span>
						<input
							class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
							placeholder=""
						/>
					</div>
					<div class="mt-8">
						<span class="uppercase text-sm text-gray-600 font-bold">Email</span>
						<input
							class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<div class="mt-8">
						<span class="uppercase text-sm text-gray-600 font-bold">
							Message
						</span>
						<textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
					</div>
					<div class="mt-8">
						<button class="uppercase text-sm font-bold tracking-wide bg-darkPurple hover:bg-brightOrange text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
							Send Message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
