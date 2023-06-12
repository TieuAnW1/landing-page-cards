import React from 'react';
import Cards from '../../assets/desktop/isocard.svg';

const Slogan = () => {
	return (
		<section className="text-36 my-14 font-extrabold">
			<div className="text-center">
				<p>
					Earn <span className="text-purple-300">More</span>
				</p>
				<p>Pay Less</p>
				<button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[8px] hover:bg-pink-500 transition-all duration-300">
					Start
				</button>
			</div>
			<div className="flex justify-center mt-69">
				<img src={Cards} alt="Card images" />
			</div>
		</section>
	);
};

export default Slogan;
