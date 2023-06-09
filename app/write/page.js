import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="p-20">
        <h4>글 작성</h4>
        <form action="/api/test" method="POST">
          <input name="title" placeholder="title" />
          <input name="content" placeholder="content" />
          <button type="submit">버튼</button>
        </form>
      </div>
    );
  } else {
    return <div>로그인해주세요</div>;
  }
}
