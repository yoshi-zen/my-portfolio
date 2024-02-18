import { ReactNode } from 'react';

export type TechWrapperProps = {
  Icon: ReactNode;
  name: string;
};

export default function TechWrapper({
  Icon,
  name,
}: TechWrapperProps) {
  return (
    <span className='flex flex-col items-center'>
      {Icon}
      <p className='leading-6 text-xxs'>{name}</p>
    </span>
  );
}
