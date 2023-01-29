import { Link } from 'react-router-dom';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Shimmer from '../Shimmer/Shimmer';
import useRestaurantList from '../hooks/useRestaurantList';
import * as s from './Home.module.scss';

const Home = () => {
	const { isLoading, restaurantList } = useRestaurantList();
	return (
		<div className={s.homeContanier}>
			{isLoading ? (
				<Shimmer />
			) : (
				restaurantList.map((restaurant) => (
					<Link
						to={`/restaurant/${restaurant.data.id}`}
						key={restaurant.data.id}
					>
						<RestaurantCard
							restaurantInfo={restaurant?.data}
							imgUrl={restaurant?.data?.cloudinaryImageId}
							name={restaurant?.data?.name}
							tags={restaurant?.data?.cuisines}
						/>
					</Link>
				))
			)}
		</div>
	);
};
export default Home;
