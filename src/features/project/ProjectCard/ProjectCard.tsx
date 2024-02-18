import TechWrapper from 'components/inner-tech-name';
import { AccordionItem } from 'components/wrapper-accordion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaHammer, FaLaptop, FaLink } from 'react-icons/fa';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiSupabase,
  SiVercel,
} from 'react-icons/si';

type Props = {
  imgSrc: string;
  title: string;
  href: string;
};

export const ProjectCard: FC<Props> = ({
  imgSrc,
  title,
  href,
}: Props) => {
  return (
    <div className='col-span-6 sm:col-span-2 md:col-span-4 items-center cursor-pointer'>
      <AccordionItem
        imgSrc={imgSrc}
        overView={
          <span>
            <div className='flex flex-row gap-3 items-center justify-center pt-1'>
              <FaLaptop />
              <h2>{title}</h2>
            </div>
          </span>
        }
      >
        <span className='flex flex-row items-center gap-2 border-b-2 border-solid my-2'>
          <FaHammer />
          <p className=' leading-5 '>使用技術</p>
        </span>
        <div className='grid grid-cols-3'>
          <TechWrapper
            iconName={<SiHtml5 size='0.8rem' />}
            name='HTML'
          />
          <TechWrapper
            iconName={<SiCss3 size='0.8rem' />}
            name='CSS'
          />
          <TechWrapper
            iconName={<SiJavascript size='0.8rem' />}
            name='JavaScript'
          />
          <TechWrapper
            iconName={<SiNextdotjs size='0.8rem' />}
            name='Next.js 12'
          />
          <TechWrapper
            iconName={<SiVercel size='0.8rem' />}
            name='Vercel'
          />
          <TechWrapper
            iconName={<SiSupabase size='0.8rem' />}
            name='Supabase'
          />
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
        <p className='leading-5'>
          このWebサイトは、自分がWeb開発を始めた原点です。理系の友人たちをライターとして招待し、その記事を掲載しています。現在はUIをより改善できるよう日々更新を続けています。
        </p>
        <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
          <FaHammer />
          <p className='leading-5'>外部リンク</p>
        </span>
        {/* <span
        className='flex flex-row items-center gap-2 bg-white text-black justify-center rounded-sm'
        onClick={() =>
          router.push('https://tech-sphere.vercel.app/')
        }
      > */}
        <Link
          className='flex flex-row items-center gap-2 bg-white text-black justify-center rounded-sm'
          href={href}
        >
          <FaLink />
          <p className='leading-7'>Webサイトへ</p>
        </Link>
        {/* </span> */}
      </AccordionItem>
    </div>
  );
};
