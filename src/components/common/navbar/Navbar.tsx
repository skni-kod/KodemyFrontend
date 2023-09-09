import React from "react";

const Navbar = () => {
  return (
		<>
			<div className="fixed w-full z-10">
				<div className="border-b-[1px] py-4">
						<Container>
							NAVBAR
						</Container>
				</div>
			</div>
		</>
	)
}

export default Navbar;

interface Props {
	children: React.ReactNode;
}

const Container : React.FC<Props> = ({children}) => {
	return <div>
		{children}
	</div>
}