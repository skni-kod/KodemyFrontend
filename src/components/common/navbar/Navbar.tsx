import React from "react";
import Logo from "@/components/common/navbar/assets/Logo";
import SearchBar from "@/components/common/navbar/Search";
import UserBar from "@/components/common/navbar/UserBar";

const Navbar = () => {
  return (
		<>
			<div className="fixed w-full h-[90px] z-10 shadow flex items-center">
				<div className="w-full px-5 py-4">
						<Container>
							<div className="flex flex-row items-center justify-between">
								<Logo/>
								<SearchBar/>
								<UserBar/>
							</div>
						</Container>
				</div>
			</div>
		</>
	)
}

export default Navbar;

interface ContainerProps {
	children: React.ReactNode;
}

const Container : React.FC<ContainerProps> = ({children}) => {
	return <div>
		{children}
	</div>
}