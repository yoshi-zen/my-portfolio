import { Fragment } from "react";
import { FaClock } from "react-icons/fa";
import { RxCursorArrow } from "react-icons/rx";

const historyList = [
  {
    year: "20xx.xx-",
    content: "今よりもっと、強くなる──",
  },
  {
    year: "2024.11-",
    content: "株式会社 Portus AI 委託開発",
  },
  {
    year: "2023.10-",
    content: "株式会社 ライトコード インターンシップ",
  },
  {
    year: "2023.04",
    content: "早稲田大学 情報理工学科 進学",
  },
  {
    year: "2022.04",
    content: "早稲田大学 基幹理工学部 入学",
  },
  {
    year: "2019.12",
    content: "ロボカップジュニア サッカーLW部門 関東ブロック 優勝",
  },
];

export const HistoryPresentation = () => {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-4 shadow-[0_0px_5px_0px_rgba(0,0,0,0.1)] md:p-2">
      <div className="flex items-center gap-2">
        <FaClock className="h-4 w-4 text-gray-400" />
        <p className="text-xs text-gray-400">My Short CV</p>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-5 md:gap-x-1">
        {historyList.map((history, idx) => (
          <Fragment key={`${history.year}-${history.content}`}>
            <div className="mt-0.5">
              <p className="text-xs text-gray-400 [font-feature-settings:tnum] [font-variant-numeric:tabular-nums]">
                {history.year}
              </p>
            </div>
            <div className="relative grid grid-cols-[13px_1fr] items-start gap-x-4 md:gap-x-2">
              <div className="relative mt-1 flex aspect-square w-[13px] items-center justify-center rounded-full bg-gray-400">
                <div className="z-10 flex aspect-square w-[11px] shrink-0 items-center justify-center rounded-full bg-white">
                  <div className="aspect-square w-[8px] shrink-0 rounded-full bg-gray-400" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">{history.content}</p>
              </div>
              {idx !== 0 && (
                <div className="absolute bottom-2 left-[6px] z-0 h-[calc(100%+20px)] w-[1px] bg-gray-400" />
              )}
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex items-center gap-2 self-end rounded-md border border-solid px-2 py-0.5">
        <RxCursorArrow className="text-gray-600" />
        <p className="text-xs text-gray-600">Hover for more details...</p>
      </div>
    </div>
  );
};
