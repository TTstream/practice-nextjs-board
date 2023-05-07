import { connectDB } from "@/util/database";

export default async function Home() {
  // 코드 줄이는 방법
  // const db = (await connectDB).db("forum");
  // let result = await db.collection("post").find().toArray();

  return <div>처음화면</div>;
}
