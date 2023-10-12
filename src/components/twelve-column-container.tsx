type TwelveColumnContainerProps = {
  children: React.ReactNode;
};

const TwelveColumnContainer = ({ children }: TwelveColumnContainerProps) => {
  return <div className='w-full grid grid-cols-12 gap-2'>{children}</div>;
};

export default TwelveColumnContainer;
