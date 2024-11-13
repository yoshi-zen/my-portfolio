import { GrassPresentation } from "features/top/github/_components/grass-presentation";
import { TopHero } from "features/top/hero/_components/top-hero";
import { HistoryPresentation } from "features/top/history/_components/history-presentation";
import { ProfilePresentation } from "features/top/profile/_components/profile-presentation";
import { AnimateName } from "frames/animate-name";
import { GetMyGrassesQuery } from "graphql/generated/schema";

type Props = {
  grasses: GetMyGrassesQuery;
};

export const TopPresentation = (props: Props) => {
  const { grasses } = props;
  return (
    <main className="flex flex-col gap-8">
      <TopHero />
      <div className="mx-auto flex max-w-[1024px] flex-col items-center gap-4 px-2 pb-20 pt-6">
        <AnimateName />
        <div className="grid w-full grid-cols-[1fr_2fr] gap-5 md:grid-cols-1 md:flex-col md:items-center">
          <ProfilePresentation />
          <HistoryPresentation />
        </div>
        <GrassPresentation grasses={grasses} />
      </div>
    </main>
  );
};
