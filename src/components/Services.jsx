import React from 'react';

const Services = () => {
	return (
		<div className="pt-16">
			<section class="container mx-auto we-offer-area text-center">
				<div class="container">
					<div class="row">
						<div class="">
							<div class="site-heading text-center">
								<h2>
									Our <span>Services</span>
								</h2>
								<h4>
									To help our sellers achieve their goals of expanding their
									territories, reaching new customers, getting new leads and
									converting them into sales, we deploy a range of internet
									marketing services. We play the role of a digital marketing
									agency that seeks to digitally position businesses and
									transition them to the future. We also use the traditional
									marketing strategies that have proved to be result-oriented.
								</h4>
							</div>
						</div>
					</div>
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 px-7 sm:px-0 our-offer-items less-carousel">
						<div class="">
							<div class="item">
								<i class="fas fa-pen-fancy"></i>
								<h4>Brand awareness</h4>
								<p>
									We promote different brands on our website and social media
									pages to put them on the eyes of your prospective customers.
								</p>
							</div>
						</div>

						<div class="">
							<div class="item">
								<i class="fas fa-dharmachakra"></i>
								<h4>Display advertising</h4>
								<p>
									On our website, we have display banners and ad sections for
									strategically running ads that are meant to reach a wide
									audience of customers.
								</p>
							</div>
						</div>

						<div class="">
							<div class="item">
								<i class="fas fa-tasks"></i>
								<h4>Email marketing</h4>
								<p>
									We collect products from different sellers to publish an
									e-magazine or mailshot flyer which we email to our
									subscribers.
								</p>
							</div>
						</div>

						<div class="">
							<div class="item">
								<i class="fas fa-tachometer-alt"></i>
								<h4>Social Media marketing</h4>
								<p>
									We promote products on our social media pages with hyperlinks
									or dedicated URLs that redirect the customer to the products
									for more information and engagement with the seller.
								</p>
							</div>
						</div>

						<div class="">
							<div class="item">
								<i class="fas fa-recycle"></i>
								<h4>Seller Education</h4>
								<p>
									We train sellers on how to use the platform and how they can
									optimise their online visibility and realise higher ROI on the
									platform.
								</p>
							</div>
						</div>

						<div class="">
							<div class="item">
								<i class="fas fa-headset"></i>
								<h4>Tender and job ads</h4>
								<p>
									We help institutions in the healthcare industry advertise
									tenders and job opportunities. This service targets the
									medical suppliers and professionals who visit the platform.
									You can always be sure that your ads will find the right
									person.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
