type ContainerTechNameProps = {
  children: React.ReactNode;
  title: string;
};

const ContainerTechName = ({ children, title }: ContainerTechNameProps) => {
  return (
    <>
      <p className=' border-b-2 border-solid leading-5'>{title}</p>
      <div className='flex flex-row gap-4 items-center py-2'>{children}</div>
    </>
  );
};

export default ContainerTechName;
