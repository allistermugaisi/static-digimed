import React from 'react';

const About = () => {
	return (
		<div className="pt-16">
			<div class="container mx-auto py-14">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
					<div class="px-7">
						<div>
							<h4 class="uppercase text-base">About Us</h4>
							<h2 class="text-2xl sm:text-4xl py-4 font-semibold text-lightBlue">
								Who We Are
							</h2>
						</div>
						<div>
							<h4 class="text-base sm:text-2xl font-bold">
								We Provide Outstanding Online Platform
							</h4>
							<p class="py-4">
								DigimedExpo is a hybrid digital B2B-and-B2C marketplace
								connecting sellers and buyers of medical devices and
								technologies through an online exposition platform. Our platform
								operates as an outsourced agency for sellers by exhibiting their
								products to potential buyers for lead generation and business
								development. We also promote medical service ads on behalf of
								the exhibitors to enable their ads reach their target audience.
								We are using internet marketing strategies that enhance market
								ubiquity for the sellers while assuring them of greater ROI.
							</p>
							<p class="py-4">
								The marketplace was founded against the backdrop of robust
								digital dynamics and shifting patterns in the distribution of
								medical devices – mainly to provide a turnkey solution to the
								recurrent hassles faced by players in the medical supply chain.
								With the outbreak of COVID-19 pandemic in 2019, human
								interaction was rendered almost impossible and thus marketing of
								medical products became a great challenge; albeit they were on
								very high demand. The main reason why marketing of these
								products was grossly affected by the pandemic was because there
								existed no digital platform in the region whereon the sellers
								could display their products for lead generation. We have thus
								developed this pioneer digital platform purely designed to serve
								the industry.
							</p>
						</div>
					</div>
					<div class="mx-7 my-4 flex items-center">
						<img
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1652020235/Arilydassociates/about_jnmjh9.jpg"
							alt="Arilyd&Associates about"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
