import NavigationBar from "./navigationComp/navigationBar";
import Navbar from './navbar/navbar'

type Props = {
  children: JSX.Element;
};

export default function Layout({ children } : Props) {
  return (
    <>
      <Navbar/>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}
