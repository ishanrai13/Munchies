import * as s from './RestaurantCard.module.scss';
import { CLOUDINARY_IMAGE_URL } from '../../Utils/constants';
import { compressStringLength } from '../../Utils/utilFuntions';
const RestaurantCard = ({ restaurantInfo = {}, nonClickable = false }) => {
	const {
		cloudinaryImageId = '',
		name = '',
		cuisines = [],
		totalRatingsString,
		slaString,
	} = restaurantInfo;
	return (
		<div
			className={s.card}
			style={
				nonClickable
					? {
							cursor: 'default',
							'border-color': '#d3d5df',
							'box-shadow': '0 4px 7px 0 rgb(218 220 230 / 60%)',
					  }
					: {}
			}
		>
			<div className={s.cardContainer}>
				<div className={s.imgContainer}>
					<img src={`${CLOUDINARY_IMAGE_URL}/${cloudinaryImageId}`} />
				</div>
				<div className={s.cardInfoContainer}>
					<h4>{name}</h4>
					<div className={s.tagsContainer}>
						{compressStringLength(cuisines.join(', '), 55)}
					</div>
					<div className={s.ratingsContainer}>
						<div>{totalRatingsString}</div>
						<div>{slaString}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
