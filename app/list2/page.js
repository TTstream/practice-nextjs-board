import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const revalidate = 20; // 20초동안 캐싱된 결과 사용

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
