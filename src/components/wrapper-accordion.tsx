import Image from 'next/image';
import { useState, useRef, ReactNode } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  overView: any;
  imgSrc: string;
};

export const AccordionItem = ({
  children,
  overView,
  imgSrc,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);

  const onClickActionToggle = () => {
    if (childElement.current) {
      const childHeight =
        childElement.current?.clientHeight; // 高さ取得
      setContentHeight(childHeight);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className='w-full'>
      <button
        onClick={onClickActionToggle}
        className='w-full border-none cursor-pointer'
      >
        <div className='relative w-full aspect-[2/1]'>
          <Image
            src={imgSrc}
            alt='hoge'
            fill
            className='object-cover'
          />
        </div>
        <div className='flex flex-row items-center justify-between'>
          {overView}
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <div
        className={twMerge(
          'overflow-hidden',
          isOpen
            ? `h-[${contentHeight}px] opacity-100`
            : `h-[70px] opacity-20`
        )}
        style={{
          transition:
            'height 0.4s linear, opacity 0.4s ease-in',
        }}
      >
        <div ref={childElement}>{children}</div>
      </div>
    </div>
  );
};
