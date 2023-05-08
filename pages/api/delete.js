import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Delete(요청, 응답) {
  if (요청.method == "POST") {
    const db = (await connectDB).db("forum");

    await db.collection("post").deleteOne({ _id: new ObjectId(요청.body) });

    return 응답.status(200);
  }
}
