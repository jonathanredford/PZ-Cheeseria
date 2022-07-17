import useSWR from 'swr';
const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const useCheeses = () => useSWR(`${API_SERVER_URL}/cheeses`);
export const useCheese = (id) =>
	useSWR(id ? `${API_SERVER_URL}/cheeses/${id}` : null);
