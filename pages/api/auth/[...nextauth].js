import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_CLIENTSECRET,
    }),
    // 구글로그인이면 구글 프로바이더찾아서 코드넣기
    // GithubProvider({
    //     clientId: "",
    //     clientSecret: "",
    //   }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
