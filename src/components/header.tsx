const Header = () => {
  return (
    <header className='absolute w-full t-0 l-0 flex p-5 justify-between'>
      <div>
        <h1>Portfolio Page</h1>
      </div>
      <div className='flex flex-row gap-5'>
        <p>My Works</p>
        <p>Profile</p>
      </div>
    </header>
  );
};

export default Header;