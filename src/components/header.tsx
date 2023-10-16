import Link from 'next/link';

const Header = () => {
  return (
    <header className='absolute w-full t-0 l-0 flex p-5 justify-between z-50'>
      <div>
        <h1>Portfolio Page</h1>
      </div>
      <div className='flex flex-row gap-5'>
        <Link href='/works'>My Works</Link>
        <p>Profile</p>
      </div>
    </header>
  );
};

export default Header;
