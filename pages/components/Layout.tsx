import NavigationBar from "./navigationComp/navigationBar";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children } : Props) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}
