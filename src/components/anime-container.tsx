export default function HeadAnimation() {
  return (
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
  );
}
