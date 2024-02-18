'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import TopImage from '@/images/top-hero.jpg';
import TechSphere from '@/images/techsphere01.png';
import MyPortrait from '@/images/my-picture.jpg';
import {
  TwelveColumnContainer,
  TwelveColumnContainerCenter,
  TwelveColumnContainerLeft,
} from '@/components/layout-twelve-column';
import {
  FaGlobeAfrica,
  FaMailBulk,
  FaPencilAlt,
  FaSchool,
  FaLaptop,
  FaHammer,
  FaCamera,
  FaLink,
} from 'react-icons/fa';
import {
  SiC,
  SiCss3,
  SiFigma,
  SiFortran,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLatex,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import { AccordionItem } from 'components/wrapper-accordion';
import TechWrapper from '@/components/TechWrapper';
import HeadingWithIcon from 'components/wrapper-heading-with-icon';
import ContainerTechName from '@/components/container-tech-name';
import HeadAnimation from '@/components/anime-container';
import { myWork } from '@/data/my-work';
import { ProjectCard } from '@/features/project/ProjectCard/ProjectCard';

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
      {isFirstAccess && <HeadAnimation />}
      <div className='relative w-full'>
        <Image
          src={TopImage}
          alt='picture for my toppage'
        />
        <div className='absolute top-[51%] left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black' />
      </div>
      <TwelveColumnContainer margin='my-12'>
        <TwelveColumnContainerLeft>
          <div className='flex flex-col h-full p-5 rounded-md shadow-[rgba(255,_255,_255,_0.2)_0px_0px_10px] sm:flex-col sm:gap-0 md:flex-row md:gap-8'>
            <div className='relative flex flex-col sm:flex-row sm:items-center gap-3'>
              <Image
                src={MyPortrait}
                alt='my portrait'
                className='rounded-xl w-full p-1'
              />
              <div className='absolute right-4 top-4 text-red-900 text-end bg-slate-50/80 rounded-md p-2'>
                <h2>Yoshihito Saito</h2>
                <p>Waseda Univ.</p>
              </div>
            </div>
            <div className='flex flex-col pt-4 gap-2 sm:gap-0.5'>
              <div className='flex flex-row text-sm items-center gap-3'>
                <FaSchool />
                <p>
                  早稲田大学 基幹理工学部 情報理工学科 2年
                </p>
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
              <div
                className='flex flex-row text-sm items-center gap-3 cursor-pointer'
                onClick={() =>
                  router.push(
                    'https://twitter.com/yor48614'
                  )
                }
              >
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
            <h1 className='text-2xl ml-6 before:block before:absolute before:bg-red-800 before:w-1 before:h-8 before:-ml-5'>
              About Me
            </h1>
            <HeadingWithIcon
              icon={<FaPencilAlt />}
              heading='My Profile'
            />
            <p>
              2023年2月の冬休み期間から独学でNext.jsの学習を始めました。そこからHTMLやCSSの基礎知識をはじめ、React
              HooksやHeadless
              CMSの活用、データベースを用いた認証機能までを一通り学び、自サイトで実装しました。現在はスマートフォンアプリの開発も学友と行っており、今後さらに視野を広げて多岐にわたる学識を身に着けたいと考えています。
            </p>
            <HeadingWithIcon
              icon={<FaSchool />}
              heading='Studying'
            />
            <p>
              現在は、Typescript、Tailwind
              CSSを中心に学習しているほか、スマートフォンアプリ開発のためFlutterとReact
              Nativeも並行して学習しています。
            </p>
            <HeadingWithIcon
              icon={<FaHammer />}
              heading='What I can'
            />
            <ContainerTechName title='Frontend'>
              <TechWrapper Icon={<SiHtml5 />} name='HTML' />
              <TechWrapper Icon={<SiCss3 />} name='CSS' />
              <TechWrapper
                Icon={<SiJavascript />}
                name='JavaScript'
              />
              <TechWrapper
                Icon={<SiTypescript />}
                name='TypeScript'
              />
              <TechWrapper
                Icon={<SiReact />}
                name='React'
              />
              <TechWrapper
                Icon={<SiNextdotjs />}
                name='Next.js'
              />
            </ContainerTechName>
            <ContainerTechName title='Backend'>
              <TechWrapper
                Icon={<SiSupabase />}
                name='Supabase'
              />
            </ContainerTechName>
            <ContainerTechName title='Others'>
              <TechWrapper Icon={<SiC />} name='C' />
              <TechWrapper
                Icon={<SiFortran />}
                name='Fortran'
              />
              <TechWrapper
                Icon={<SiLatex />}
                name='LaTeX'
              />
            </ContainerTechName>
            <ContainerTechName title='Tools'>
              <TechWrapper
                Icon={<SiGithub />}
                name='Github'
              />
              <TechWrapper
                Icon={<SiFigma />}
                name='Figma'
              />
              <TechWrapper
                Icon={<SiVisualstudiocode />}
                name='VSCode'
              />
            </ContainerTechName>
          </div>
        </TwelveColumnContainerCenter>
        <h1 className='col-span-full text-2xl ml-6 before:block before:absolute before:bg-red-800 before:w-1 before:h-8 before:-ml-5'>
          Project
        </h1>
        {myWork.map((work, index) => (
          <ProjectCard
            key={index}
            imgSrc={work.imgSrc}
            title={work.title}
            href={work.href}
            peers={work.peers}
            startDate={work.startDate}
            description={work.description}
            tech={work.tech}
          />
        ))}
      </TwelveColumnContainer>
    </main>
  );
}
