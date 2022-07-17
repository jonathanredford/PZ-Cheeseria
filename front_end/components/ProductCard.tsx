import Link from 'next/link';

const ProductCard = ({ id, name, href, description, price, image }) => {
	return (
		<Link href={href} key={id}>
			<a className="group relative">
				<div className="w-full bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 h-50 md:h-60 lg:h-80">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-center object-cover"
					/>
				</div>
				<div className="mt-4 flex justify-between">
					<div>
						<h3 className="text-sm font-medium text-gray-900">{name}</h3>
						<p className="mt-1 text-sm text-gray-500">{description}</p>
					</div>
					<p className="text-sm font-medium text-gray-900">{price}/per kg</p>
				</div>
			</a>
		</Link>
	);
};

export default ProductCard;
