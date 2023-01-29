import { useState, useEffect } from 'react';
import { RESTAURANTS_LIST_URL } from '../Utils/constants';

// export const fetching = async () => {
// 	try{
// 		// throw new Response("Not Found", { status: 404 });
// 		const res = await fetch(RESTAURANTS_LIST_URL);
// 		return res;
// 	}catch(err){

// 	}
// }
const useRestaurantList = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getRestaurants = async () => {
		setIsLoading(true);
		const res = await fetch(RESTAURANTS_LIST_URL);
		const resJson = await res.json();
		resJson?.data?.cards?.forEach((cardsGroup) => {
			if (cardsGroup.cardType === 'seeAllRestaurants') {
				setRestaurantList(cardsGroup?.data?.data?.cards);
			}
		});
		setIsLoading(false);
	};
	useEffect(() => {
		getRestaurants();
	}, []);

	return {
		isLoading,
		restaurantList,
	};
};
export default useRestaurantList;
