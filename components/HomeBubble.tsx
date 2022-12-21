import { useState } from "react";
import Image from "next/image";

type Props = {
  children: JSX.Element;
  className?: String;
};

const HomeBubble = ({ children, className }: Props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className={
        active
          ? "cursor-pointer relative p-2 rounded-full min-h-[80px] border-sky-500 border-2 font-semibold aspect-square text-center flex items-center justify-center text-xl text-sky-500 shadow-lg bg-white " +
            className
          : "cursor-pointer relative p-2 rounded-full min-h-[80px] border-black border-2 font-semibold aspect-square text-center flex items-center justify-center text-xl bg-white " +
            className
      }
      onClick={handleClick}
    >
      {active ? (
        <Image
          src="/tick.svg"
          alt="Zaznaczono"
          width={20}
          height={20}
          className="absolute right-[8%] top-[8%]"
        />
      ) : (
        <></>
      )}

      {children}
    </div>
  );
};

export default HomeBubble;
