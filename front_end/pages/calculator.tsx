import Head from 'next/head';
import { Fragment } from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Calculator | PZ Cheeseria</title>
			</Head>
			<div className="max-w-lg mx-auto px-4">
				<Calculator />
			</div>
		</Fragment>
	);
};

export default CalculatorPage;
