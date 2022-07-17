import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const Navbar = () => {
	const router = useRouter();

	const navigation = [
		{
			name: 'Cheese Shop',
			href: '/',
			current: router.route === '/',
		},
		{
			name: 'Cheese Calculator',
			href: '/calculator',
			current: router.route === '/calculator',
		},
	];
	return (
		<nav className="bg-amber-400">
			<div className="max-w-screen-lg mx-auto px-4">
				<div className="relative flex items-center justify-between py-3">
					<div className="flex-1 flex items-center justify-between">
						<div className="flex-shrink-0 flex items-center">
							<Link href="/">
								<a>
									<img
										className="block h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
										src="/pz-cheeseria-logo.png"
										alt="PZ Cheeseroa"
									/>
								</a>
							</Link>
						</div>
						<div className="sm:ml-6">
							<div className="flex space-x-4">
								{navigation.map((item) => (
									<Link href={item.href} key={item.name}>
										<a
											className={clsx(
												item.current
													? 'bg-amber-500 text-gray-900'
													: 'text-gray-900 hover:bg-amber-500',
												'px-3 py-2 rounded-md text-sm font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
