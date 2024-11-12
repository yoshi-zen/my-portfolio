export const AnimateName = () => {
  return (
    <div className="animation-delay-4000 fixed inset-0 z-50 flex h-[calc(100dvh)] w-screen animate-disappear-to-right items-center justify-center gap-1 bg-white">
      <div className="relative flex flex-col items-center gap-2">
        <div className="relative">
          <h1 className="text-lg font-bold">Yoshihito Saito</h1>
          <div className="absolute inset-0 z-0 animate-from-right-to-center bg-white" />
        </div>
        <div className="relative z-10 mx-auto h-[2px] w-[50%] max-w-[400px] animate-width-scale-up overflow-hidden bg-gray-300">
          <div className="animation-delay-2000 absolute inset-0 translate-x-[-100%] animate-appear-from-left bg-black" />
        </div>
        <div className="relative z-10">
          <p className="text-center text-sm text-gray-300">Now Loading...</p>
          <div className="absolute inset-0 animate-width-scale-down bg-white" />
        </div>
        <div className="animation-delay-3000 absolute inset-0 z-20 translate-y-[-100%] animate-appear-from-top bg-white duration-500" />
      </div>
    </div>
  );
};
