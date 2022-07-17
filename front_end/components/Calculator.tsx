import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { WEIGHT_OPTIONS } from '../lib/constants';
import { useCheeses } from '../lib/hooks';

const Calculator = () => {
	const { data: cheeses } = useCheeses();
	const [selectedCheese, setSelectedCheese] = useState(null);
	const [selectedWeight, setSelectedWeight] = useState(
		WEIGHT_OPTIONS[0].weightInGrams
	);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		if (selectedCheese && selectedWeight) {
			setPrice((selectedCheese.pricePerKg / 1000) * selectedWeight);
		}
	}, [cheeses, selectedCheese, selectedWeight]);

	return (
		<form className="bg-gray-100 rounded p-8 mt-8 ">
			{/* Weight picker */}
			<div className="">
				<h2 className="text-xl font-semibold text-gray-900">
					Cheese Price Calculator
				</h2>

				<div className="mt-6">
					<label
						htmlFor="location"
						className="block text-sm font-medium text-gray-900"
					>
						Select cheese
					</label>
					<select
						id="location"
						name="location"
						className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
						defaultValue=""
						onChange={(e) => setSelectedCheese(cheeses[e.target.value])}
					>
						<option value="" disabled>
							Choose an option
						</option>
						{cheeses?.length &&
							cheeses.map((cheese, index) => (
								<option key={cheese.id} value={index}>
									{cheese.name} (
									{(cheese.pricePerKg / 100).toLocaleString('en-AU', {
										style: 'currency',
										currency: 'AUD',
									})}
									/per kg)
								</option>
							))}
					</select>
				</div>
			</div>
			<div className="mt-6">
				<div className="flex items-center justify-between">
					<h2 className="text-sm font-medium text-gray-900">Select weight</h2>
				</div>

				<RadioGroup
					value={selectedWeight}
					onChange={setSelectedWeight}
					className="mt-2"
				>
					<RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
					<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
						{WEIGHT_OPTIONS.map((weightOption) => (
							<RadioGroup.Option
								key={weightOption.weightInGrams}
								value={weightOption.weightInGrams}
								className={({ active, checked }) =>
									clsx(
										active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
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
			<div className="mt-6">
				<label htmlFor="location" className="block font-medium text-gray-900">
					Total price
				</label>
				<p>
					{price &&
						(price / 100).toLocaleString('en-AU', {
							style: 'currency',
							currency: 'AUD',
						})}
				</p>
			</div>
		</form>
	);
};

export default Calculator;
