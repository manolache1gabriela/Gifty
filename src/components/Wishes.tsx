import { useState } from "react";
import Wish from "./Wish";
import AddWishModal from "./AddWishModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import EditWish from "./EditWish";

export default function Wishes() {
	const filters: string[] = ["filter 1", "filter 2", "filter 3", "filter 4"];

	const [user, setUser] = useState(true);
	const [showAddWishModal, setShowAddWishModal] = useState(false);
	const [showEdit, setShowEdit] = useState(false);

	return (
		<div className="w-[90%] overflow-hidden flex justify-center flex-col gap-8 items-center font-poppins">
			<div className="w-full flex justify-between items-center gap-4">
				<div className="md:w-2/3 flex justify-center items-center md:justify-start gap-4">
					<img
						className="w-16 h-16 rounded-full border-2 border-primary"
						src="./src/assets/white.jpg"
						alt="avatar"
					/>
					<p className="text-primary text-center text-xl md:text-3xl">
						<span className="text-secondary hidden md:inline">Name</span>{" "}
						wishes:
					</p>
				</div>
				{user && (
					<div className="flex gap-4 text-secondary text-3xl lg:text-4xl">
						<FontAwesomeIcon
							className="hover:text-primary cursor-pointer"
							icon={faCirclePlus}
							onClick={() => {
								setShowAddWishModal(true);
							}}
						/>
						<AddWishModal
							showAddWishModal={showAddWishModal}
							setShowAddWishModal={setShowAddWishModal}
						/>
					</div>
				)}
			</div>
			<div className="flex w-full justify-start overflow-x-scroll mx-24 no-scrollbar gap-8 mt-8 py-4 pl-2">
				{filters.map((filter) => (
					<button
						className="bg-secondary min-w-fit shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 py-1 rounded-full text-white hover:bg-primary"
						key={filter}
					>
						{filter}
					</button>
				))}
			</div>
			<div className="flex w-full justify-start ">
				<form method="get">
					<select
						className="border-2 border-primary rounded-lg p-1 text-center cursor-pointer text-sm text-primary font-semibold"
						name="order"
						id="order"
						defaultValue="The newest"
					>
						<option value="new">The newest</option>
						<option value="alphabetical">Alphabetical</option>
						<option value="rising">Rising price</option>
						<option value="declining">Declining price</option>
					</select>
				</form>
			</div>
			<div className="w-full flex flex-col md:flex-row justify-between gap-8 flex-wrap items-center">
				{filters.map((i) => (
					<Wish user={user} setShowEdit={setShowEdit} key={i} />
				))}
				{showEdit && <EditWish showEdit={showEdit} setShowEdit={setShowEdit} />}
			</div>
		</div>
	);
}
