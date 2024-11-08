import { format } from "date-fns";
import { getMyGrasses } from "features/top/_github/_api/getMyGrasses";
import { GrassPresentation } from "features/top/_github/_components/grass-presentation";
import { AnimateName } from "frames/animate-name";
import { Suspense } from "react";

export default async function Home() {
  const grassData = await getMyGrasses({
    userId: process.env.GITHUB_USER_ID || "",
    from: "2024-01-01T00:00:00Z",
    to: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'"),
  });

  console.log(grassData);

  return (
    <Suspense fallback={<AnimateName />}>
      <main className="flex items-center justify-center">
        <AnimateName />
        <GrassPresentation grasses={grassData} />
      </main>
    </Suspense>
  );
}
