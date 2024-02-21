'use client';

import { useRef } from 'react';

export const UseRefEx = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const div = divRef.current;
    if (!div) throw Error('divRef is not assigned');
    div.style.backgroundColor = 'red';
  };

  return (
    <div>
      <div ref={divRef}>サンプルDiv</div>
      <button onClick={handleClick}>色変更</button>
    </div>
  );
};
