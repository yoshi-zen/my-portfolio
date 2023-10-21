import { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type AccordionItemProps = {
  children: React.ReactNode;
  overView: any;
  image: any;
};
export default function AccordionItem({ children, overView, image }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);

  const onClickActionToggle = () => {
    if (childElement.current) {
      const childHeight = childElement.current?.clientHeight; // 高さ取得
      setContentHeight(childHeight);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className='w-full'>
      <button onClick={onClickActionToggle} className='w-full border-none cursor-pointer'>
        {image}
        <div className='flex flex-row items-center justify-between'>
          {overView}
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <div className={isOpen ? `h-[${contentHeight}px] opacity-100` : `h-[70px] opacity-20`} style={{ transition: 'height 0.4s linear, opacity 0.4s ease-in', overflow: 'hidden' }}>
        <div ref={childElement}>{children}</div>
      </div>
    </div>
  );
}
