'use client'
import { headerItems, userInfo } from "../constants/constant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll"



const Intro: React.FC = () => {
  return (
   <section id={headerItems.home.page}>
    <div className="h-screen flex text-center justify-center items-center">
      <Image alt= "Profile Picture" src="/picture/profile.jpg"
      
      width={100}
      height={100}
      />
      

    </div>
    <div>
      
      <h1>
      Hi, I&#39;m <span className={'text-red-600 text-3xl md:text-4xl'}>{userInfo.name}</span>!
                </h1>
                <p
                    className={'mt-4 mb-4'}
                    dangerouslySetInnerHTML={{ __html: userInfo.heading }}
                />
                <ScrollLink
                to={headerItems.projects.page}
                 className="bg-teal-600 flex items-center justify-center cursor-pointer w-28 h-10 rounded text-neutral-100"
                 spy={true}
                    smooth={true}

       >projects</ScrollLink>
               
    </div>
   </section>
  )
}

export default Intro;
