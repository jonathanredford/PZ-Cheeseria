const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;
import fetcher from './fetcher';

const cheeseApi = {
	create: (body) =>
		fetcher(`${API_SERVER_URL}/cheeses`, {
			method: 'POST',
			body: JSON.stringify(body),
		}),

	list: () => fetcher(`${API_SERVER_URL}/cheeses`),

	retrieve: (id: string) => fetcher(`${API_SERVER_URL}/cheeses/${id}`),

	update: (id: string, body: any) =>
		fetcher(`${API_SERVER_URL}/cheeses`, {
			method: 'PATCH',
			body: JSON.stringify(body),
		}),

	delete: (id) =>
		fetcher(`${API_SERVER_URL}/cheeses/${id}`, {
			method: 'DELETE',
		}),
};

export default cheeseApi;
