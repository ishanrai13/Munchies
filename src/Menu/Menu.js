import { useParams } from 'react-router-dom';
import Shimmer from '../Shimmer/Shimmer';
import useRestautantInfo from '../hooks/useRestaurantInfo';
import * as s from './Menu.module.scss';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import MenuCard from '../MenuCard/MenuCard';

const Menu = () => {
	const { id } = useParams();
	const { isLoading, restaurantInfo } = useRestautantInfo(id);

	if (!isLoading && !restaurantInfo) {
		return <div>No restaurant found</div>;
	}
	return isLoading ? (
		<Shimmer />
	) : (
		<div className={s.container}>
			<RestaurantCard restaurantInfo={restaurantInfo} nonClickable/>
			<div className={s.itemsListContanier}>
				{Object.values(restaurantInfo?.menu?.items).map((item) => (
					<MenuCard menuItem={item} />
				))}
			</div>
		</div>
	);
};

export default Menu;
