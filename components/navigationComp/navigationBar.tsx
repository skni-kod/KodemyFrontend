import React,{useState} from 'react'
import Image from 'next/image'
import obj from './export'
import Link from 'next/link'
import { Switch } from '@headlessui/react'
import { FaSun, FaMoon } from 'react-icons/fa';


const styles = {
    imgStyle :' cursor-pointer w-[17px] h-[17px] ml-5',
    animationStyle :'transition duration-500 hover:-translate-y-1',
    textStyle : 'ml-5 font-poppins not-italic font-medium text-sm leading-5 cursor-pointer',
    linkStyle : 'flex items-center',
}


export default function NavigationBar() {
    const [ExpandMenu, setExpandMenu] = useState(true)
    const [DarkMode,setDarkMode] = useState(false)

  return (
    <div className='h-screen absolute z-10 bg-white'>
    <div className={`h-full ${ExpandMenu ? '2sm:w-[14vw] sm:w-[8vw] lg:w-[6vw] xl:w-[5vw] 2xl:w-[4vw]' : '2sm:w-[47vw] sm:w-[23vw] lg:w-[20vw] xl:w-[16vw] 2xl:w-[14vw]'} flex flex-col ring-1 border-r-2`}>
            <div className={`mt-9 ${styles.animationStyle}`}>
                <Image onClick={()=>setExpandMenu(!ExpandMenu)} className={styles.imgStyle} src={ExpandMenu ? obj.Hamburger : obj.close1} alt='burger'/>
            </div>
            <div className={`mt-12 ${styles.animationStyle}`}>
                <Link href='/sectionGeneral?firstCategory=Aplikacje webowe' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.internet1} alt='web'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Aplikacje webowe</p>}
                </Link>
            </div>
            <div className={`mt-6 ${styles.animationStyle}`}>
                <Link href='/sectionGeneral?firstCategory=GameDev' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.console1} alt='cmd'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>GameDev</p>}
                </Link>
            </div>
            <div className={`mt-6 ${styles.animationStyle}`}>
                <Link href='/sectionGeneral?firstCategory=Retro gaming' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.retroGame} alt='retro gaming'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Elektronika/Retro</p>}
                </Link>
            </div>
            <div className={`mt-6 ${styles.animationStyle}`}>
                <Link href='/sectionGeneral?firstCategory=Jezyki programowania' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.codingLanguage} alt='coding language'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Języki programowania</p>}
                </Link>
            </div>
            <div className={`mt-6 ${styles.animationStyle}`}>
                <Link href='/sectionGeneral?firstCategory=Inne' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.moreInfo} alt='more info'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Inne</p>}
                </Link>
            </div>
            {/*Walczyłem tutaj by zrobić te przeskakujące ikonki słońca/księzyca ale bez większych rezultatów*/}
            <div className={`mt-auto mb-6 ml-auto mr-auto`}>
            <Switch
                checked={DarkMode}
                onChange={setDarkMode}
                className={`${ DarkMode ? 'bg-gray-800' : 'bg-gray-400'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                
                <span className={`${DarkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
            </Switch>
            </div>
    </div>
    </div>
  )
}


//  <Image className={styles.imgStyle} onClick={()=>setDarkMode((prevState)=>!prevState)} src={DarkMode ? obj.lightMode : obj.nightMode} alt='night mode'/>