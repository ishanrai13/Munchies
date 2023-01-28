import { useEffect, useState } from 'react';
import { RESTAURANT_INFO_URL } from '../Utils/constants';

const useRestautantInfo = (id) => {
	const [isLoading, setIsLoading] = useState(false);
	const [restaurantInfo, setRestaurantInfo] = useState(null);

	const getRestaurantInfo = async () => {
		setIsLoading(true);
		const res = await fetch(RESTAURANT_INFO_URL + id);
		const resJson = await res.json();
		setRestaurantInfo(resJson?.data);
		setIsLoading(false);
	};

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	return {
		isLoading,
		restaurantInfo,
	};
};

export default useRestautantInfo;
