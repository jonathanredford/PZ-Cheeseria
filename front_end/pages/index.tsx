import Head from 'next/head';
import { Fragment } from 'react';
import ProductCard from '../components/ProductCard';
import { useCheeses } from '../lib/hooks';

export default function Home() {
	const { data: cheeses, isValidating, error } = useCheeses();

	return (
		<Fragment>
			<Head>
				<title>PZ Cheeseria</title>
			</Head>
			<div className="max-w-screen-lg mx-auto px-4">
				<div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
					{cheeses?.length ? (
						cheeses.map((cheese) => (
							<ProductCard
								key={cheese.id}
								id={cheese.id}
								name={cheese.name}
								href={`/cheeses/${cheese.id}`}
								description={cheese.color}
								price={(cheese.pricePerKg / 100).toLocaleString('en-AU', {
									style: 'currency',
									currency: 'AUD',
								})}
								image={cheese.imageUrls[0]}
							/>
						))
					) : (
						<div className="col-span-3">
							<p className="text-center text-3xl text-gray-900 font-semibold">
								{isValidating ? 'Loading...' : 'No cheese found!'}
							</p>
						</div>
					)}
				</div>
			</div>
		</Fragment>
	);
}
