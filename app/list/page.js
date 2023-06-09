import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 항상 dynamic rendering으로 표시되게
export const dynamic = "force-dynamic";
// 항상 dynamic static으로 표시되게
//export const dynamic = "force-static";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
