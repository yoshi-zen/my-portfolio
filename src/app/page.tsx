import { format } from "date-fns";
import { getMyGrasses } from "features/top/github/_api/getMyGrasses";
import { GrassPresentation } from "features/top/github/_components/grass-presentation";
import { ProfilePresentation } from "features/top/profile/_components/profile-presentation";
import { AnimateName } from "frames/animate-name";
import { Suspense } from "react";

export default async function Home() {
  const today = new Date();
  const lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

  const grassData = await getMyGrasses({
    userId: process.env.GITHUB_USER_ID || "",
    from: format(lastYear, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
    to: format(today, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
  });

  return (
    <Suspense fallback={<AnimateName />}>
      <main className="flex items-center justify-center gap-3">
        <AnimateName />
        <ProfilePresentation />
        <GrassPresentation grasses={grassData} />
      </main>
    </Suspense>
  );
}
