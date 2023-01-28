import { useParams } from 'react-router-dom';
import Shimmer from '../Shimmer/Shimmer';
import useRestautantInfo from '../hooks/useRestaurantInfo';
import { CLOUDINARY_IMAGE_URL } from '../Utils/constants';
import * as s from './Menu.module.scss';

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
			<div className={s.imgContainer}>
				<img
					src={`${CLOUDINARY_IMAGE_URL}/${restaurantInfo.cloudinaryImageId}`}
				/>
				<h3>{restaurantInfo.name}</h3>
			</div>
			<ul>
				{Object.values(restaurantInfo?.menu?.items).map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
