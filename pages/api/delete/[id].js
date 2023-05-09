import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Delete(요청, 응답) {
  // console.log(요청.query.id);
  const db = (await connectDB).db("forum");
  await db.collection("post").deleteOne({ _id: new ObjectId(요청.query.id) });
  return 응답.status(200).json("삭제완료");
}
