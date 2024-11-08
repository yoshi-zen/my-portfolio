import type { GetMyGrassesQuery } from "graphql/generated/schema";
import { SiGithub } from "react-icons/si";

type Props = {
  grasses: GetMyGrassesQuery;
};

const colorList = [
  "#1AFF3E",
  "#37E34B",
  "#24F440",
  "#45B655",
  "#40CA52",
  "#4C8A54",
  "#4DA058",
  "#425B47",
  "#4C7552",
  "#3D4B3F",
];

const getTwBgColor = (count: number) => {
  if (count === 0) return "#ebedf0";
  const index = Math.floor(count / 5) + 1;
  if (index >= colorList.length) return colorList[colorList.length - 1];
  return colorList[index];
};

export const GrassViewer = async (props: Props) => {
  const { grasses } = props;

  return (
    <div className="flex gap-0.5">
      {grasses.user?.contributionsCollection.contributionCalendar.weeks.map((week, idx) => {
        return (
          <div className="flex flex-col gap-0.5" key={`${week.contributionDays.toString()}-${idx}`}>
            {week.contributionDays.map((day) => {
              return (
                <span
                  key={day.date}
                  className="aspect-square w-[10px] rounded-sm"
                  style={{
                    backgroundColor: getTwBgColor(day.contributionCount),
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
