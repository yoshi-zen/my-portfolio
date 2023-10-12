'use client';

import Image from 'next/image';
import TopImage from '@/images/top-hero.jpg';
import MyPortrait from '@/images/my-picture.jpg';
import { TwelveColumnContainer, TwelveColumnContainerCenter, TwelveColumnContainerLeft } from '@/components/twelve-column-container';
import { FaGlobeAfrica, FaMailBulk, FaPencilAlt, FaSchool } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Header />
      <div className='w-full bg-cyan-900'>
        <Image src={TopImage} alt='picture for my toppage' />
      </div>
      <TwelveColumnContainer margin='my-4'>
        <TwelveColumnContainerLeft>
          <div className='bg-gray-700 h-full p-5 rounded-md shadow-lg'>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <Image src={MyPortrait} alt='my portrait' className='rounded-2xl w-1/2 p-1 md: w-1/3' />
              <div>
                <h1>Yoshihito Saito</h1>
                <h2>Waseda University</h2>
              </div>
            </div>
            <div className='flex flex-col pt-4 gap-4 sm:gap-0.5'>
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
          <div className='bg-gray-700 p-5 rounded-md shadow-lg'>
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
      </TwelveColumnContainer>
    </main>
  );
}
