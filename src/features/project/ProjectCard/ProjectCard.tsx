import TechWrapper, {
  TechWrapperProps,
} from '@/components/TechWrapper';
import { AccordionItem } from 'components/wrapper-accordion';
import Link from 'next/link';
import { FC } from 'react';
import { FaHammer, FaLaptop, FaLink } from 'react-icons/fa';

type Props = {
  imgSrc: string;
  title: string;
  href: string;
  peers: number;
  startDate: string;
  description: string;
  tech: TechWrapperProps[];
};

export const ProjectCard: FC<Props> = ({
  imgSrc,
  title,
  href,
  peers,
  startDate,
  description,
  tech,
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
          {tech.map((item, index) => (
            <TechWrapper
              key={index}
              Icon={item.Icon}
              name={item.name}
            />
          ))}
        </div>
        <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
          <FaHammer />
          <p className='leading-5'>人数</p>
        </span>
        <p className='leading-4'>{peers}名</p>
        <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
          <FaHammer />
          <p className='leading-5'>開発期間</p>
        </span>
        <p className='leading-4'>{startDate} -</p>
        <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
          <FaHammer />
          <p className='leading-5'>説明</p>
        </span>
        <p className='leading-5'>{description}</p>
        <span className='flex flex-row items-center gap-2 border-b-2 border-solid mt-3 mb-1'>
          <FaHammer />
          <p className='leading-5'>外部リンク</p>
        </span>
        <Link
          className='flex flex-row items-center gap-2 bg-white text-black justify-center rounded-sm'
          href={href}
        >
          <FaLink />
          <p className='leading-7'>Webサイトへ</p>
        </Link>
      </AccordionItem>
    </div>
  );
};
