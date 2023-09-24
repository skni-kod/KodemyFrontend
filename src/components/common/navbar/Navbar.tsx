import React from "react";
import Logo from "@/components/common/navbar/assets/Logo";
import SearchBar from "@/components/common/navbar/Search";
import UserBar from "@/components/common/navbar/UserBar";
import Container from "@/components/common/Container";

const Navbar = () => {
	return (
		<>
			<div className="w-full z-20 bg-[var(--body-color)] relative shadow flex items-center">
				<div className="w-full px-5 py-4">
					<Container>
						<div className="flex flex-col sm:flex-row items-center justify-between">
							<div className="flex flex-col 2sm:flex-row items-center">
								<Logo />
								<SearchBar />
							</div>
							<UserBar />
						</div>
					</Container>
				</div>
			</div>
		</>
	);
};

export default Navbar;
