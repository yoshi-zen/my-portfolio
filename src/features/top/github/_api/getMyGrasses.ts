import {
  GetMyGrassesDocument,
  type GetMyGrassesQuery,
} from "graphql/generated/schema";
import { getClient } from "@/lib/client";

type GetMyGrassesArgs = {
  userId: string;
  from: string;
  to: string;
};

export const getMyGrasses = async ({
  userId,
  from,
  to,
}: GetMyGrassesArgs): Promise<GetMyGrassesQuery> => {
  const { data: response } = await getClient().query<GetMyGrassesQuery>({
    query: GetMyGrassesDocument,
    variables: {
      userId,
      from,
      to,
    },
  });

  return response;
};
