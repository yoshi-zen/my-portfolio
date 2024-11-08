import { format, parse } from "date-fns";
import type { GetMyGrassesQuery } from "graphql/generated/schema";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "ui/hover-card";

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
    <div className="flex items-start gap-0.5">
      {grasses.user?.contributionsCollection.contributionCalendar.weeks.map((week, idx) => {
        if (idx === 0 && week.contributionDays.length < 7) return null;
        return (
          <div className="flex flex-col gap-0.5" key={`${week.contributionDays.toString()}-${idx}`}>
            {week.contributionDays.map((day) => {
              return (
                <HoverCard key={day.date}>
                  <HoverCardTrigger asChild>
                    <span
                      className="aspect-square w-[10px] rounded-[2px]"
                      style={{
                        backgroundColor: getTwBgColor(day.contributionCount),
                      }}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit p-3">
                    <div className="flex gap-2">
                      <div
                        className="h-[60px] w-2 rounded-sm"
                        style={{
                          backgroundColor: getTwBgColor(day.contributionCount),
                        }}
                      />
                      <div className="flex flex-col">
                        <p className="text-xs text-gray-600">
                          {format(parse(day.date, "yyyy-MM-dd", new Date()), "yyyy/MM/dd")}
                        </p>
                        <p className="flex items-baseline gap-1">
                          <span className="text-lg font-bold text-gray-700">
                            {day.contributionCount}
                          </span>
                          <span className="text-xs text-gray-700">contributions</span>
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
