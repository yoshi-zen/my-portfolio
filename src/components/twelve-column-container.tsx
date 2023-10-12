type TwelveColumnContainerProps = {
  children: React.ReactNode;
  margin?: string;
};

type TwelveColumnContainerChildProps = {
  children: React.ReactNode;
};

export const TwelveColumnContainer = ({ children, margin }: TwelveColumnContainerProps) => {
  return <div className={`grid grid-cols-12 w-11/12 ${margin} mx-auto gap-x-2 gap-y-10 sm:grid-cols-4 md:grid-cols-8`}>{children}</div>;
};

export const TwelveColumnContainerLeft = ({ children }: TwelveColumnContainerChildProps) => {
  return <div className='h-full col-span-5 sm:col-span-full md:col-span-4'>{children}</div>;
};

export const TwelveColumnContainerCenter = ({ children }: TwelveColumnContainerChildProps) => {
  return <div className='h-full col-start-6 col-end-13 sm:col-span-full md:col-start-5'>{children}</div>;
};
