import * as s from './Shimmer.module.scss';

const Shimmer = () => {
	return (
		<div className={s.cardsContanier}>
			{Array(15)
				.fill('')
				.map((e, idx) => (
					<div className={s.card} key={idx}></div>
				))}
		</div>
	);
};
export default Shimmer;
