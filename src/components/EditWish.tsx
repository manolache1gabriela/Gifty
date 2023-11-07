import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction } from "react";

interface EditWish {
	showEdit: boolean;
	setShowEdit: (() => boolean) | Dispatch<SetStateAction<boolean>>;
}

export default function EditWish({ showEdit, setShowEdit }: EditWish) {
	return (
		<Transition.Root show={showEdit} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10 font-poppins"
				onClose={setShowEdit}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-[90vh] md:min-h-[100vh] items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
									<div className="sm:flex items-center justify-center">
										<div className="text-center sm:ml-4 sm:mt-0 sm:text-left text-primary">
											<Dialog.Title
												as="h3"
												className="text-xl font-semibold leading-6 text-secondary"
											>
												Add a new wish
											</Dialog.Title>
											<div className="mt-2 flex w-full flex-col items-center justify-center gap-4">
												<p className="w-full text-sm font-semibold">
													Fill in the wish description below.
												</p>
												<form
													className="space-y-2 w-full"
													action="#"
													method="POST"
												>
													<div className="flex flex-col items-start">
														<label
															htmlFor="product-name"
															className="block text-sm font-medium leading-6 text-primary"
														>
															Product Name
														</label>
														<div className="w-full">
															<input
																id="product-name"
																name="product-name"
																type="text"
																defaultValue="This Product"
																required
																className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
															/>
														</div>
													</div>
													<div className="flex items-center gap-2">
														<div className="w-1/2 flex flex-col items-start gap-2">
															<label
																htmlFor="price"
																className="block text-sm font-medium leading-6 text-primary"
															>
																Price (RON)
															</label>
															<div className="w-full">
																<input
																	id="price"
																	name="price"
																	type="number"
																	min={0}
																	defaultValue="50"
																	className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
																/>
															</div>
														</div>
														<div className="w-1/2 flex flex-col items-start gap-2">
															<label
																htmlFor="quantity"
																className="block text-sm font-medium leading-6 text-primary"
															>
																Quantity
															</label>
															<div className="w-full">
																<input
																	id="quantity"
																	name="quantity"
																	type="number"
																	min={0}
																	defaultValue="2"
																	className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-start gap-2">
														<label
															htmlFor="image"
															className="block text-sm font-medium leading-6 text-primary"
														>
															Image (only .png or .jpg)
														</label>
														<div className="w-full">
															<input
																id="image"
																name="image"
																type="file"
																accept="image/png, image/jpeg"
																className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
															/>
														</div>
													</div>
													<div className="flex flex-col items-start">
														<label
															htmlFor="description"
															className="block text-sm font-medium leading-6 text-primary"
														>
															Product Name
														</label>
														<div className="mt-2 w-full">
															<textarea
																defaultValue="This link"
																rows={4}
																cols={50}
																id="description"
																name="description"
																required
																className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
															/>
														</div>
													</div>
													<div className="pt-2 flex items-center gap-2">
														<input
															id="favorite"
															name="favorite"
															type="checkbox"
															defaultChecked
															className="checkbox-round"
														/>
														<label
															htmlFor="favorite"
															className="block text-lg font-medium leading-6 text-primary"
														>
															Favorite
														</label>
													</div>
													<div className="pt-4 flex items-center justify-center md:justify-end gap-4">
														<input
															type="reset"
															value="Reset"
															className="mt-3 text-red-600 inline-flex w-1/2 justify-center rounded-md bg-red-100 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-primary hover:ring-0 hover:bg-red-600 hover:text-white sm:mt-0 sm:w-auto"
														/>
														<input
															type="submit"
															value="Edit wish"
															className="mt-3 text-secondary inline-flex w-1/2 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-primary hover:ring-0 hover:bg-green-500 hover:text-white sm:mt-0 sm:w-auto"
														/>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:ring-0 hover:bg-secondary hover:text-white sm:mt-0 sm:w-auto"
										onClick={() => setShowEdit(!showEdit)}
									>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
