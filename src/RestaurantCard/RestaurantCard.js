import * as s from './RestaurantCard.module.scss';
import { CLOUDINARY_IMAGE_URL } from '../Utils/constants';
const RestaurantCard = ({ imgUrl = '', name = '', tags = [] }) => {
	// console.log(imgUrl);
	return (
		<div className={s.cardContainer}>
			<div className={s.imgContainer}>
				<img src={`${CLOUDINARY_IMAGE_URL}/${imgUrl}`} />
			</div>
			<div>
				<h5>{name}</h5>
				<div>{tags.join(', ')}</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
