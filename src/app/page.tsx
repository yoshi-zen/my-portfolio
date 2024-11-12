import { format, subMonths } from "date-fns";
import { getMyGrasses } from "features/top/github/_api/getMyGrasses";
import { TopPresentation } from "features/top/top-presentation";
import { AnimateName } from "frames/animate-name";
import { Suspense } from "react";

export default async function Home() {
  const today = new Date();
  const lastYear = subMonths(today, 6);

  const grassData = await getMyGrasses({
    userId: process.env.GITHUB_USER_ID || "",
    from: format(lastYear, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
    to: format(today, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
  });

  return (
    <Suspense fallback={<AnimateName />}>
      <TopPresentation grasses={grassData} />
    </Suspense>
  );
}
