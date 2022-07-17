import { Fragment, useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { WEIGHT_OPTIONS } from '../../lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCheese } from '../../lib/hooks';
import clsx from 'clsx';
import Head from 'next/head';

export default function Example() {
	const router = useRouter();
	const { data: cheese, isValidating, error } = useCheese(router.query.id);
	const [selectedWeight, setSelectedWeight] = useState(
		WEIGHT_OPTIONS[0].weightInGrams
	);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		if (cheese) {
			setPrice((cheese.pricePerKg / 1000) * selectedWeight);
		}
	}, [selectedWeight, cheese]);

	if (!cheese) {
		return (
			<div className="py-16">
				<p className="text-center text-3xl text-gray-900 font-semibold">
					{isValidating || !error ? 'Loading...' : 'No cheese found!'}
				</p>
			</div>
		);
	}

	return (
		<Fragment>
			<Head>
				<title>{cheese ? `${cheese.name} | ` : null}PZ Cheeseria</title>
			</Head>
			<div className="max-w-screen-lg mx-auto">
				<div className="pt-6 pb-16 sm:pb-24">
					<nav
						aria-label="Breadcrumb"
						className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
					>
						<ol role="list" className="flex items-center space-x-4">
							<li>
								<div className="flex items-center">
									<Link href="/">
										<a className="mr-4 text-sm font-medium text-gray-900">
											Cheese Shop
										</a>
									</Link>
									<svg
										viewBox="0 0 6 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="h-5 w-auto text-gray-300"
									>
										<path
											d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
											fill="currentColor"
										/>
									</svg>
								</div>
							</li>
							<li className="text-sm">
								<p aria-current="page" className="font-medium text-gray-500">
									{cheese?.name}
								</p>
							</li>
						</ol>
					</nav>
					<div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
							<div className="lg:col-start-8 lg:col-span-5">
								<div className="flex justify-between">
									<h1 className="text-xl font-medium text-gray-900">
										{cheese?.name}
									</h1>
									<p className="text-xl font-medium text-gray-900">
										{cheese &&
											(cheese.pricePerKg / 100).toLocaleString('en-AU', {
												style: 'currency',
												currency: 'AUD',
											})}
										/per kg
									</p>
								</div>
								<p className="mt-2 text-sm font-medium text-gray-700">
									Colour: {cheese?.colour}
								</p>
							</div>

							{/* Image gallery */}
							<div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
								<h2 className="sr-only">Images</h2>

								<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
									{cheese?.imageUrls.map((image, index) => (
										<img
											key={index}
											src={image}
											alt={`${cheese?.name} image ${index + 1}`}
											className={`${
												index === 0
													? 'lg:col-span-2 lg:row-span-2'
													: 'hidden lg:block'
											} rounded-lg`}
										/>
									))}
								</div>
							</div>

							<div className="mt-8 lg:col-span-5">
								<form>
									{/* Weight picker */}
									<div className="mt-8">
										<div className="flex items-center justify-between">
											<h2 className="text-sm font-medium text-gray-900">
												Weight
											</h2>
										</div>

										<RadioGroup
											value={selectedWeight}
											onChange={setSelectedWeight}
											className="mt-2"
										>
											<RadioGroup.Label className="sr-only">
												Choose a size
											</RadioGroup.Label>
											<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
												{WEIGHT_OPTIONS.map((weightOption) => (
													<RadioGroup.Option
														key={weightOption.weightInGrams}
														value={weightOption.weightInGrams}
														className={({ active, checked }) =>
															clsx(
																active
																	? 'ring-2 ring-offset-2 ring-indigo-500'
																	: '',
																checked
																	? 'bg-amber-400 border-transparent text-white'
																	: 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
																'cursor-pointer focus:outline-none border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
															)
														}
													>
														<RadioGroup.Label as="span">
															{weightOption.label}
														</RadioGroup.Label>
													</RadioGroup.Option>
												))}
											</div>
										</RadioGroup>
									</div>
								</form>

								<div className="mt-10">
									<p className="text-lg font-semibold text-gray-900">
										Total price:{' '}
										{price &&
											(price / 100).toLocaleString('en-AU', {
												style: 'currency',
												currency: 'AUD',
											})}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
