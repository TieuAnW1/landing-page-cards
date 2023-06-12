import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';

export default function navBar() {
	return (
		<nav className="flex items-center justify-between">
			<div className="flex items-center">
				<p className="text-20 font-bold mr-2 text-white">SonCard</p>
				<BsSunFill className="text-24 text-sun-yellow cursor-pointer" />
			</div>
			<ul className="font-semibold">
				<HiOutlineMenu className="text-24 text-white cursor-pointer" />
			</ul>
		</nav>
	);
}
