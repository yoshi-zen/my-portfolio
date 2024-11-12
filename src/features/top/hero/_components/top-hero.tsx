import { IconList } from "features/top/profile/_components/icon-list";

export const TopHero = () => {
  return (
    <div className="relative h-[70dvh] w-screen">
      <div className="mx-auto flex h-full w-full max-w-[1024px] justify-between px-6 md:flex-col md:justify-center md:gap-6">
        <div className="flex flex-col justify-center gap-6">
          <div className="h-[10px] w-[70px] bg-black" />
          <div className="flex flex-col gap-2 drop-shadow-md">
            <div className="text-6xl font-bold">Yoshihito Saito's</div>
            <div className="text-4xl font-bold text-gray-700">Portfolio Site</div>
          </div>
        </div>
        <div className="flex items-end gap-3">
          <div className="flex h-full items-end md:flex-col md:items-start">
            <p className="rotate-180 [text-orientation:sideways] [writing-mode:vertical-rl] md:rotate-0 md:[text-orientation:inherit] md:[writing-mode:inherit]">
              Contact Me
            </p>
            <div className="animation-delay-5000 h-0 w-[2px] animate-height-scale-up bg-gray-600 md:h-[2px] md:w-[40vw] md:animate-width-scale-up" />
          </div>
          <IconList />
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[30%] flex items-center gap-4">
        <div className="aspect-square w-[30px] rounded-full bg-gray-400 blur-sm" />
        <div className="aspect-square w-[30px] rounded-full bg-gray-400 blur-sm" />
        <div className="aspect-square w-[30px] rounded-full bg-gray-400 blur-sm" />
      </div>
      <div className="absolute left-[60%] top-[10%] flex items-center gap-4">
        <div className="aspect-square w-[30px] rounded-full bg-gray-400 blur-sm" />
        <div className="aspect-square w-[30px] rounded-full bg-gray-400 blur-sm" />
        <div className="aspect-square w-[30px] rounded-full bg-gray-400 blur-sm" />
      </div>
    </div>
  );
};
