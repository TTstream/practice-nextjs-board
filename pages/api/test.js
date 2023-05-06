import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("제목 써야돼");
    }
    try {
      let { title, content } = 요청.body;
      let db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne({ title, content });

      return 응답.status(200).redirect(302, "/list");
    } catch (error) {}
  }
}
