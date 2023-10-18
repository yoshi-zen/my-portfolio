'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import TopImage from '@/images/top-hero.jpg';
import TechSphere from '@/images/techsphere01.png';
import MyPortrait from '@/images/my-picture.jpg';
import { TwelveColumnContainer, TwelveColumnContainerCenter, TwelveColumnContainerLeft } from '@/components/twelve-column-container';
import { FaGlobeAfrica, FaMailBulk, FaPencilAlt, FaSchool, FaLaptop, FaHammer, FaHtml5, FaCss3, FaJs, FaCamera, FaChevronCircleDown, FaLink } from 'react-icons/fa';
import { SiFigma, SiGithub, SiNextdotjs, SiReact, SiSupabase, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import AccordionItem from '@/components/accordion-wrapper';
import TechWrapper from '@/components/tech-wrapper';
import Link from 'next/link';
import HeadingWithIcon from '@/components/heading-with-icon';

export default function Home() {
  const router = useRouter();
  const [isFirstAccess, setIsFirstAccess] = useState(true);

  useEffect(() => {
    const data = sessionStorage.getItem('first accessed');
    if (data === 'true') setIsFirstAccess(false);
    sessionStorage.setItem('first accessed', 'true');
  }, []);

  return (
    <main>
      <Header />
      {isFirstAccess && (
        <>
          <div className='absolute text-2xl px-5 py-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] bg-orange-600 animate-fade-in-out'>
            <span className='animate-fade-in-out'>Welcome To My Portfolio...</span>
          </div>
          <span className='fixed inset-l-[-100%] inset-r-[100%] w-full h-1/3 top-0 z-50 bg-black animate-slide-out-right' />
          <span className='fixed inset-l-[-100%] inset-r-[100%] w-full h-1/3 top-1/3 z-50 bg-black animate-slide-out-right-early' />
          <span className='fixed inset-l-[-100%] inset-r-[100%] w-full h-1/3 top-2/3 z-50 bg-black animate-slide-out-right-delay' />
          <span className='fixed inset-l-[-100%] inset-r-[100%] w-full h-1/6 top-1/4 z-50 bg-black animate-slide-out-right' />
          <span className='fixed inset-l-[-100%] inset-r-[100%] w-full h-1/6 top-[20%] z-50 bg-black animate-slide-out-right-delay' />
          <span className='fixed inset-l-[-100%] inset-r-[100%] w-full h-1/6 top-2/3 z-50 bg-black animate-slide-out-right-so-delay' />
        </>
      )}
      <div className='relative w-full'>
        <Image src={TopImage} alt='picture for my toppage' />
        <div className='absolute top-[51%] left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black' />
      </div>
      <TwelveColumnContainer margin='my-12'>
        <TwelveColumnContainerLeft>
          <div className='flex flex-col h-full p-5 rounded-md shadow-[rgba(255,_255,_255,_0.2)_0px_0px_10px] sm:flex-col sm:gap-0 md:flex-row md:gap-8'>
            <div className='relative flex flex-col sm:flex-row sm:items-center gap-3'>
              <Image src={MyPortrait} alt='my portrait' className='rounded-xl w-full p-1' />
              <div className='absolute right-4 top-4 text-red-900 text-end bg-slate-50/80 rounded-md p-2'>
                <h2>Yoshihito Saito</h2>
                <p>Waseda Univ.</p>
              </div>
            </div>
            <div className='flex flex-col pt-4 gap-2 sm:gap-0.5'>
              <div className='flex flex-row text-sm items-center gap-3'>
                <FaSchool />
                <p>早稲田大学 基幹理工学部 情報理工学科 2年</p>
              </div>
              <div className='flex flex-row text-sm items-center gap-3 group'>
                <span className='group-hover:animate-spin'>
                  <FaGlobeAfrica />
                </span>
                <p>Tokyo, Japan</p>
              </div>
              <div className='flex flex-row text-sm items-center gap-3'>
                <FaMailBulk />
                <p>yoshihito.zen.18@gmail.com</p>
              </div>
              <div className='flex flex-row text-sm items-center gap-3 cursor-pointer' onClick={() => router.push('https://twitter.com/yor48614')}>
                <FaXTwitter />
                <p>@yor48614</p>
              </div>
              <div className='flex flex-row text-sm items-center gap-3'>
                <FaCamera />
                <p>開発・写真撮影</p>
              </div>
            </div>
          </div>
        </TwelveColumnContainerLeft>
        <TwelveColumnContainerCenter>
          <div className='h-full p-5 rounded-md shadow-[rgba(255,_255,_255,_0.2)_0px_0px_10px]'>
            <h1 className='text-2xl ml-6 before:block before:absolute before:bg-red-800 before:w-1 before:h-8 before:-ml-5'>About Me</h1>
            <HeadingWithIcon icon={<FaPencilAlt />} heading='My Profile' />
            <p>2023年2月の冬休み期間から独学でNext.jsの学習を始めました。そこからHTMLやCSSの基礎知識をはじめ、React HooksやHeadless CMSの活用、データベースを用いた認証機能までを一通り学び、自サイトで実装しました。現在はスマートフォンアプリの開発も学友と行っており、今後さらに視野を広げて多岐にわたる学識を身に着けたいと考えています。</p>
            <div className='pt-4 flex flex-row items-center gap-3 '>
              <FaSchool />
              <h2>Studying</h2>
            </div>
            <p>現在は、Typescript、Tailwind CSSを中心に学習しているほか、スマートフォンアプリ開発のためFlutterとReact Nativeも並行して学習しています。</p>
            <div className='pt-5 flex flex-row text-sm items-center gap-3 '>
              <FaHammer />
              <h2>What I can</h2>
            </div>
            <p className=' border-b-2 border-solid leading-5'>FrontEnd</p>
            <div className='flex flex-row gap-4 items-center py-2 overflow-scroll hidden-scrollbar'>
              <TechWrapper iconName={<FaHtml5 />} name='HTML' />
              <TechWrapper iconName={<FaCss3 />} name='CSS' />
              <TechWrapper iconName={<FaJs />} name='JavaScript' />
              <TechWrapper iconName={<SiTypescript />} name='TypeScript' />
              <TechWrapper iconName={<SiReact />} name='React' />
              <TechWrapper iconName={<SiNextdotjs />} name='Next.js' />
            </div>
            <p className=' border-b-2 border-solid leading-5'>Backend</p>
            <div className='flex flex-row gap-4 items-center py-2'>
              <TechWrapper iconName={<SiSupabase />} name='Supabase' />
            </div>
            <p className=' border-b-2 border-solid leading-5'>Tools</p>
            <div className='flex flex-row gap-4 items-center py-2'>
              <TechWrapper iconName={<SiGithub />} name='Github' />
              <TechWrapper iconName={<SiFigma />} name='Figma' />
              <TechWrapper iconName={<SiVisualstudiocode />} name='VSCode' />
            </div>
          </div>
        </TwelveColumnContainerCenter>
        <h1 className='col-span-full text-2xl ml-6 before:block before:absolute before:bg-red-800 before:w-1 before:h-8 before:-ml-5'>Project</h1>
        <div className='col-span-6 sm:col-span-2 md:col-span-4 items-center cursor-pointer'>
          <AccordionItem
            image={<Image src={TechSphere} alt='techsphere' />}
            overView={
              <span>
                <div className='flex flex-row gap-3 items-center justify-center pt-1'>
                  <FaLaptop />
                  <h2>TechSphere Blog</h2>
                </div>
              </span>
            }
          >
            <span className='flex flex-row items-center gap-2 border-b-2 border-solid my-2'>
              <FaHammer />
              <p className=' leading-5 '>使用技術</p>
            </span>
            <div className='grid grid-cols-3'>
              <TechWrapper iconName={<FaHtml5 size='0.8rem' />} name='HTML' />
              <TechWrapper iconName={<FaCss3 size='0.8rem' />} name='CSS' />
              <TechWrapper iconName={<FaJs size='0.8rem' />} name='JavaScript' />
              <TechWrapper iconName={<SiNextdotjs size='0.8rem' />} name='Next.js' />
              <TechWrapper iconName={<SiVercel size='0.8rem' />} name='Vercel' />
              <TechWrapper iconName={<SiSupabase size='0.8rem' />} name='Supabase' />
            </div>
            <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
              <FaHammer />
              <p className='leading-5'>人数</p>
            </span>
            <p className='leading-4'>1名</p>
            <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
              <FaHammer />
              <p className='leading-5'>開発期間</p>
            </span>
            <p className='leading-4'>2023/2 -</p>
            <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
              <FaHammer />
              <p className='leading-5'>説明</p>
            </span>
            <p className='leading-5'>このWebサイトは、自分がWeb開発を始めた原点です。理系の友人たちをライターとして招待し、その記事を掲載しています。現在はUIをより改善できるよう日々更新を続けています。</p>
            <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
              <FaHammer />
              <p className='leading-5'>外部リンク</p>
            </span>
            <span className='flex flex-row items-center gap-2 bg-white text-black justify-center rounded-sm' onClick={() => router.push('https://tech-sphere.vercel.app/')}>
              <FaLink />
              <p className='leading-7'>Webサイトへ</p>
            </span>
          </AccordionItem>
        </div>
        <div className='p-2 h-[50px] col-span-4 sm:col-span-2 items-center bg-slate-500'>
          <div className=''></div>
          <p>coming soon...</p>
        </div>
      </TwelveColumnContainer>
    </main>
  );
}
