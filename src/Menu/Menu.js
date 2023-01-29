import { useParams } from 'react-router-dom';
import Shimmer from '../Shimmer/Shimmer';
import useRestautantInfo from '../hooks/useRestaurantInfo';
import * as s from './Menu.module.scss';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import MenuCard from '../MenuCard/MenuCard';
import { useState, useEffect } from 'react';
import searchIcon from '../assets/img/search.svg';

const Menu = () => {
	const { id } = useParams();
	const { isLoading, restaurantInfo } = useRestautantInfo(id);
	const [filteredRestaurantMenu, setFilteredRestaurantMenu] = useState([]);
	const [restaurantMenu, setRestaurantMenu] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (restaurantInfo) {
			const menuList = Object.values(restaurantInfo?.menu?.items).map(
				(item) => item
			);
			setFilteredRestaurantMenu(menuList);
			setRestaurantMenu(menuList);
		} else {
			setFilteredRestaurantMenu([]);
			setRestaurantMenu([]);
		}
	}, [restaurantInfo]);

	const filterMenu = (searchValue = '', completeData = []) => {
		const filteredData = completeData.filter((item) => {
			return item.name.toLowerCase().includes(searchValue.toLowerCase());
		});
		return filteredData;
	};
	if (!isLoading && !restaurantInfo) {
		return <div>No restaurant found</div>;
	}
	return isLoading ? (
		<Shimmer />
	) : (
		<div className={s.container}>
			<RestaurantCard restaurantInfo={restaurantInfo} nonClickable />
			<div className={s.itemsListContanier}>
				<div className={s.searchContanier}>
					<div className={s.searchInput}>
						<div className={s.inputIcon}>
							<img src={searchIcon} />
						</div>
						<input
							type="text"
							placeholder="Search for dishes..."
							onChange={(e) => {
								setSearchText(e.target.value);
								console.log(e.target.value);
							}}
						/>
					</div>
					<button
						onClick={() => {
							setFilteredRestaurantMenu(filterMenu(searchText, restaurantMenu));
						}}
					>
						Search
					</button>
				</div>
				{filteredRestaurantMenu.map((item) => (
					<MenuCard menuItem={item} />
				))}
			</div>
		</div>
	);
};

export default Menu;
