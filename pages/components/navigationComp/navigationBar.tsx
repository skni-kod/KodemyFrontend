import React,{useState} from 'react'
import Image from 'next/image'
import obj from './export'
import Link from 'next/link'

const styles = {
    imgStyle :'ml-5 cursor-pointer w-[17px] h-[17px] ',
    animationStyle :' transition duration-500 hover:-translate-y-1',
    textStyle : 'ml-3 font-poppins not-italic font-medium text-sm leading-5 cursor-pointer',
    linkStyle : 'flex items-center',
}


export default function NavigationBar() {
    const [ExpandMenu, setExpandMenu] = useState(false)

  return (
    <div className={`h-[712px] ${ExpandMenu ? 'w-[64px]' : 'w-[256px]'} bg-white flex flex-col ring-1`}>
            <div className={`mt-14 ${styles.animationStyle}`}>
                <Image onClick={()=>setExpandMenu(!ExpandMenu)} className={styles.imgStyle} src={ExpandMenu ? obj.Hamburger : obj.close1} alt='burger'/>
            </div>
            <div className={`mt-4 ${styles.animationStyle}`}>
                <Link href='/components/webAppComp/webAppComp' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.internet1} alt='web'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Aplikacje webowe</p>}
                </Link>
            </div>
            <div className={`mt-4 ${styles.animationStyle}`}>
                <Link href='/components/gameDev/gameDev' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.console1} alt='cmd'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>GameDev</p>}
                </Link>
            </div>
            <div className={`mt-4 ${styles.animationStyle}`}>
                <Link href='/components/retroEle/retroEle' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.retroGame} alt='retro gaming'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Elektronika/Retro</p>}
                </Link>
            </div>
            <div className={`mt-4 ${styles.animationStyle}`}>
                <Link href='/components/programmingLanguages/programmingLanguages' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.codingLanguage} alt='coding language'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Języki programowania</p>}
                </Link>
            </div>
            <div className={`mt-4 ${styles.animationStyle}`}>
                <Link href='/components/inne/inne' className={styles.linkStyle}>
                    <Image className={styles.imgStyle} src={obj.moreInfo} alt='more info'/>
                    {ExpandMenu ? '':<p className={styles.textStyle}>Inne</p>}
                </Link>
            </div>
            <div className={`mt-auto mb-4 ${styles.animationStyle}`}>
                <Image className={styles.imgStyle} src={obj.nightMode} alt='night mode'/>
            </div>
    </div>
  )
}
