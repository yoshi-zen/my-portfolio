'use client';

import Image from 'next/image';
import TopImage from '@/images/top-hero.jpg';
import MyPortrait from '@/images/my-picture.jpg';
import { TwelveColumnContainer, TwelveColumnContainerCenter, TwelveColumnContainerLeft } from '@/components/twelve-column-container';
import { FaGlobeAfrica, FaMailBulk, FaPencilAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className='w-full'>
        <Image src={TopImage} alt='picture for my toppage' />
      </div>
      <TwelveColumnContainer margin='my-4'>
        <TwelveColumnContainerLeft>
          <div className='bg-gray-900 p-5 rounded-md shadow-lg'>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <Image src={MyPortrait} alt='my portrait' className='rounded-2xl w-1/2 p-1 md: w-1/3' />
              <div>
                <h1 className='font-bold text-2xl'>Yoshihito Saito</h1>
                <p>Waseda University</p>
              </div>
            </div>
            <div className='flex flex-col pt-4'>
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
          <div className='bg-gray-900 p-2 rounded-md shadow-lg'>
            <h1 className='text-2xl ml-6 font-bold before:block before:absolute before:bg-red-950 before:w-1 before:h-8 before:-ml-5'>About Me</h1>
            <div className='pt-2 flex flex-row text-sm items-center gap-3 '>
              <FaPencilAlt />
              <h2 className='text-xl font-semibold'>My skills</h2>
            </div>
            {/* <h3 className='text-lg font-medium'>Frontend</h3> */}
            <ul className='pl-5'>
              <li>Next.js</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </TwelveColumnContainerCenter>
      </TwelveColumnContainer>
    </main>
  );
}
