import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Delete(요청, 응답) {
  console.log(요청.query.id);

  let session = await getServerSession(요청, 응답, authOptions);

  const db = (await connectDB).db("forum");
  let deletePost = await db
    .collection("post")
    .findOne({ _id: new ObjectId(요청.query.id) });

  if (session) {
    if (session.user.email == deletePost.author) {
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(요청.query.id) });
      return 응답.status(200).json("삭제완료");
    } else {
      return 응답.status(500).json("현재유저와 작성자 불일치");
    }
  } else {
    return 응답.status(500).json("로그인해주세요~");
  }
}
