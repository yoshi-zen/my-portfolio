import Image from 'next/image';
import TwelveColumnContainer from '@/components/twelve-column-container';

export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    <main>
      <TwelveColumnContainer>
        <div className='bg-blue-100'>1</div>
        <div className='bg-red-100'>2</div>
        <div className='bg-blue-100'>1</div>
        <div className='bg-red-100'>2</div>
        <div className='bg-blue-100'>1</div>
        <div className='bg-red-100'>2</div>
        <div className='bg-blue-100'>1</div>
        <div className='bg-red-100'>2</div>
        <div className='bg-blue-100'>1</div>
        <div className='bg-red-100'>2</div>
        <div className='bg-blue-100'>1</div>
        <div className='bg-red-100'>2</div>
      </TwelveColumnContainer>
    </main>
  );
}
