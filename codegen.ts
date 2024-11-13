import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config(); // 環境変数を読み込ませる

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          "User-Agent": "nodejs",
        },
      },
    },
  ],
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/graphql/generated/schema.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        rawRequest: true,
      },
    },
  },
};

export default config;
