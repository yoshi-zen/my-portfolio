type HeadingWithIconProps = {
  icon: any;
  heading: string;
};

export default function HeadingWithIcon({ icon, heading }: HeadingWithIconProps) {
  return (
    <div className='mt-5 flex flex-row text-sm items-center gap-3 bg-white text-black '>
      {icon}
      <h2>{heading}</h2>
    </div>
  );
}
