import * as s from './MenuCard.module.scss';
import { CLOUDINARY_IMAGE_URL } from '../../Utils/constants';
import DEFAULT_DISH_IMG from '../../assets/img/default-dish.webp';

const MenuCard = ({ menuItem = {} }) => {
	const { name, cloudinaryImageId, price, description } = menuItem;
	return (
		<div className={s.container}>
			<div className={s.infoContainer}>
				<h4>{name}</h4>
				<h5>Rs. {price / 100}</h5>
				<div className={s.description}>{description}</div>
			</div>
			<div className={s.imageContainer}>
				{cloudinaryImageId && cloudinaryImageId.length > 0 ? (
					<img src={`${CLOUDINARY_IMAGE_URL}/${cloudinaryImageId}`} />
				) : (
					<img src={DEFAULT_DISH_IMG} />
				)}
			</div>
		</div>
	);
};

export default MenuCard;
