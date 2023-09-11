import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SidebarAssets from "@/components/common/sidebar/SidebarAssets";
import { Switch } from "@headlessui/react";
import { getSection, SectionResponse } from "@/services/SectionService";

const styles = {
  imgStyle: " cursor-pointer w-[17px] h-[17px]",
  animationStyle: "transition duration-500 hover:-translate-y-1",
  textStyle:
    "ml-5 font-poppins not-italic font-medium text-sm leading-5 cursor-pointer",
  linkStyle: "flex items-center",
};

const Sidebar = () => {
  const [isExpandMenu, setIsExpandMenu] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sections, setSections] = useState<SectionResponse>([]);

  const handleToggleExpandMenu = () =>
    setIsExpandMenu((isExpandMenu) => !isExpandMenu);

  useEffect(() => {
    async function fetchSections() {
      try {
        const response = await getSection();
        setSections(response);
      } catch (error) {
        console.error("Błąd podczas pobierania sekcji:", error);
      }
    }

    fetchSections();
  }, []);

  const handleSectionLogo = (id: number) => {
    switch (id) {
      case 1:
        return SidebarAssets.internet;
      case 2:
        return SidebarAssets.console;
      case 3:
        return SidebarAssets.retroGame;
      case 4:
        return SidebarAssets.codingLanguage;
      default:
        return SidebarAssets.moreInfo;
    }
  };

  return (
    <div className="h-screen top-0 z-10 bg-[var(--body-color)] fixed shadow">
      <div
        className={`mt-[200px] sm:mt-[110px] ${
          isExpandMenu
            ? "2sm:w-[47vw] sm:w-[23vw] lg:w-[20vw] xl:w-[16vw] 2xl:w-[14vw]"
            : "2sm:w-[14vw] sm:w-[8vw] lg:w-[6vw] xl:w-[5vw] 2xl:w-[4vw]"
        } flex flex-col align-center static`}
      >
        <div className={`mb-6 flex justify-center ${styles.animationStyle}`}>
          <Image
            onClick={handleToggleExpandMenu}
            className={styles.imgStyle}
            src={isExpandMenu ? SidebarAssets.close : SidebarAssets.hamburger}
            alt="burger"
          />
        </div>
        {sections.map(({ id, name, categories }) => (
          <>
            <Section
              key={id}
              className="mt-6"
              href={`/materials?category=${id}`}
              icon={handleSectionLogo(id)}
              pText={name}
              isExpandMenu={isExpandMenu}
            />
          </>
        ))}
        {/*<Section
					className="mt-12"
					href="/sectionGeneral?firstCategory=Aplikacje webowe"
					icon={SidebarAssets.internet}
					pText="Aplikacje webowe"
					isExpandMenu={isExpandMenu}
				/>
				<Section
					className="mt-6"
					href="/sectionGeneral?firstCategory=GameDev"
					icon={SidebarAssets.console}
					pText="GameDev"
					isExpandMenu={isExpandMenu}
				/>
				<Section
					className="mt-6"
					href="/sectionGeneral?firstCategory=Retro gaming"
					icon={SidebarAssets.retroGame}
					pText="Elektronika/Retro"
					isExpandMenu={isExpandMenu}
				/>
				<Section
					className="mt-6"
					href="/sectionGeneral?firstCategory=Jezyki programowania"
					icon={SidebarAssets.codingLanguage}
					pText="Języki programowania"
					isExpandMenu={isExpandMenu}
				/>
				<Section
					className="mt-6"
					href="/sectionGeneral?firstCategory=Inne"
					icon={SidebarAssets.moreInfo}
					pText="Inne"
					isExpandMenu={isExpandMenu}
				/>*/}
      </div>
    </div>
  );
};

export default Sidebar;

interface SectionProps {
  key?: number;
  className?: string;
  href: string;
  icon: StaticImageData;
  pText: string;
  isExpandMenu: boolean;
}

const Section: React.FC<SectionProps> = ({
  className = "",
  href,
  icon,
  pText,
  isExpandMenu,
}) => {
  return (
    <div
      className={`${className} ${styles.animationStyle} ${
        isExpandMenu ? "" : "w-min"
      } mx-2.5`}
    >
      <Link href={href} className={styles.linkStyle}>
        <Image
          className={styles.imgStyle}
          src={icon.src}
          alt={pText}
          width="30"
          height="30"
        />
        {isExpandMenu && <p className={styles.textStyle}>{pText}</p>}
      </Link>
    </div>
  );
};
