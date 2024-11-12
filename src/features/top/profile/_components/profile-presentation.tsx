import { IconList } from "features/top/profile/_components/icon-list";
import Image from "next/image";
import { Button } from "ui/button";

export const ProfilePresentation = () => {
  return (
    <div className="w-full min-w-[250px] overflow-hidden rounded-md bg-white shadow-[0_0px_5px_0px_rgba(0,0,0,0.1)]">
      <div className="grid">
        <div className="relative col-start-1 row-start-1 aspect-[3/2] max-h-[200px] w-full">
          <Image
            src="/images/profile-hero.jpg"
            alt="profile-hero"
            className="object-cover pb-6"
            fill
          />
        </div>
        <div className="relative col-start-1 row-start-1 aspect-square w-[30%] self-end justify-self-center overflow-hidden rounded-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
          <Image src="/images/profile-icon.jpg" alt="profile-icon" className="object-cover" fill />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-3 pt-1">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-800">Yoshihito Saito</p>
          <p className="text-xxs text-gray-500">Web & App dev</p>
        </div>
        <IconList />
        <div className="flex items-center justify-center">
          <Button variant="outline" className="cursor-pointer" asChild>
            <span className="text-xs text-gray-700">View Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
