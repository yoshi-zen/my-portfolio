type HeadingWithIconProps = {
  icon: any;
  heading: string;
};

export default function HeadingWithIcon({ icon, heading }: HeadingWithIconProps) {
  return (
    <div className='mt-6 mb-2 pl-3 rounded-md flex flex-row text-sm items-center gap-3 bg-gray-700 text-white shadow-[rgba(255,_255,_255,_0.3)_0px_0px_10px]'>
      {icon}
      <h2>{heading}</h2>
    </div>
  );
}
