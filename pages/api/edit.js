import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(요청, 응답) {
  if (요청.method == "POST") {
    const db = (await connectDB).db("forum");
    //   console.log(요청.body);
    let { _id, title, content } = 요청.body;
    await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(_id) },
        { $set: { title: title, content: content } }
      );

    return 응답.status(200).redirect(302, "/list");
  }
}
