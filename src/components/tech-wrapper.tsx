type TechWrapperProps = {
  iconName: any;
  name: string;
};

export default function TechWrapper({ iconName, name }: TechWrapperProps) {
  return (
    <span className='flex flex-col items-center'>
      {iconName}
      <p className='text-[0.3rem] leading-6'>{name}</p>
    </span>
  );
}
