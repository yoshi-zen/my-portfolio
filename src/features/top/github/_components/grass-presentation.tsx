import { GrassViewer } from "features/top/github/_components/grass-viewer";
import { GetMyGrassesQuery } from "graphql/generated/schema";
import { SiGithub } from "react-icons/si";

type Props = {
  grasses: GetMyGrassesQuery;
};

export const GrassPresentation = async (props: Props) => {
  const { grasses } = props;

  return (
    <div className="flex flex-col items-start gap-2 rounded-md bg-white p-3 shadow-[0_0px_5px_0px_rgba(0,0,0,0.1)]">
      <div className="flex w-full items-center justify-between">
        <div className="group flex items-center gap-2">
          <SiGithub className="h-4 w-4 text-gray-400 group-hover:animate-rotate" />
          <p className="text-xs text-gray-400">Latest Contribution on Github</p>
        </div>
      </div>
      <GrassViewer grasses={grasses} />
    </div>
  );
};
