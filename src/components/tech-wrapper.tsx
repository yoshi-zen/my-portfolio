type TechWrapperProps = {
  iconName: any;
  name: string;
};

export default function TechWrapper({ iconName, name }: TechWrapperProps) {
  return (
    <span className='flex flex-col items-center'>
      {iconName}
      <p className='leading-6 text-xxxs'>{name}</p>
    </span>
  );
}
