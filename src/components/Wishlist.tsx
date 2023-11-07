import { useState } from "react";
import NoWish from "./NoWish";
import Wishes from "./Wishes";
export default function Wishlist() {
	const [wished, setWished] = useState(false);

	function toggleWished() {
		setWished(!wished);
	}

	return (
		<div className="w-full flex justify-center items-center py-10 min-h-[70vh]">
			{wished && <NoWish toggleWished={toggleWished} />}
			{!wished && <Wishes />}
		</div>
	);
}
