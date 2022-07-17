const fetcher = async (url: any, options?: RequestInit) => {
	options = options || { headers: {} };
	options.headers = {
		'Content-Type': 'application/json',
		...options.headers,
	};

	const res = await fetch(url, options);
	if (!res.ok) {
		const error = await res.json();
		throw new Error(error);
	} else {
		return await res.json();
	}
};

export default fetcher;
