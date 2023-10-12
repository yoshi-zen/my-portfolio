'use client';

import Image from 'next/image';
import TopImage from '@/images/top-hero.jpg';
import MyPortrait from '@/images/my-picture.jpg';
import { TwelveColumnContainer, TwelveColumnContainerCenter, TwelveColumnContainerLeft } from '@/components/twelve-column-container';
import { FaGlobeAfrica, FaMailBulk, FaPencilAlt, FaSchool, FaLaptop } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Header />
      <div className='relative w-full h-1/3 bg-cyan-900'>
        <Image src={TopImage} alt='picture for my toppage' />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black' />
      </div>
      <TwelveColumnContainer margin='my-12'>
        <TwelveColumnContainerLeft>
          <div className='flex flex-col bg-gray-700 h-full p-5 rounded-md shadow-lg sm:flex-col sm:gap-0 md:flex-row md:gap-8'>
            <div className='relative flex flex-col sm:flex-row sm:items-center gap-3'>
              <Image src={MyPortrait} alt='my portrait' className='rounded-xl w-full p-1' />
              <div className='absolute right-4 top-4 text-red-900 text-end bg-slate-50/80 rounded-md p-2'>
                <h2>Yoshihito Saito</h2>
                <p>Waseda University</p>
              </div>
            </div>
            <div className='flex flex-col pt-4 gap-3 sm:gap-0.5'>
              <div className='flex flex-row text-sm items-center gap-3'>
                <FaGlobeAfrica />
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
            </div>
          </div>
        </TwelveColumnContainerLeft>
        <TwelveColumnContainerCenter>
          <div className='h-full bg-gray-700 p-5 rounded-md shadow-lg'>
            <h1 className='text-2xl ml-6 before:block before:absolute before:bg-red-800 before:w-1 before:h-8 before:-ml-5'>About Me</h1>
            <div className='pt-4 flex flex-row text-sm items-center gap-3 '>
              <FaPencilAlt />
              <h2>My Profile</h2>
            </div>
            <p>今年2月より、冬休み期間から独学でNext.jsの学習を始めました。そこからHTMLやCSSの基礎知識をはじめ、HooksやHeadless CMSの活用、データベースを用いた認証機能までを一通り学び、自サイトで実装しました。現在はスマートフォンアプリの開発も学友と行っており、今後さらに視野を広げて多岐にわたる学識を身に着けたいと考えています。</p>
            <div className='pt-4 flex flex-row items-center gap-3 '>
              <FaSchool />
              <h2>Studying</h2>
            </div>
            <p>現在は、Typescript、Tailwind CSSを中心に学習しているほか、スマートフォンアプリ開発のためFlutterとReact Nativeも並行して学習しています。</p>
          </div>
        </TwelveColumnContainerCenter>
        <div className='h-full bg-gray-700 p-5 rounded-md shadow-lg col-span-full'>
          <h1 className='text-2xl ml-6 before:block before:absolute before:bg-red-800 before:w-1 before:h-8 before:-ml-5'>Project</h1>
          <div className='pt-4 flex flex-row items-center gap-3 '>
            <FaLaptop />
            <h2>Techsphere Blog</h2>
          </div>
        </div>
      </TwelveColumnContainer>
    </main>
  );
}
