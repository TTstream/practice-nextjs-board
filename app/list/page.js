import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${a._id}`}>
            <h4>{a.title ? a.title : a.id}</h4>
          </Link>
          <DetailLink id={a._id} />
          <p>{a.content ? a.content : a.password}</p>
        </div>
      ))}
    </div>
  );
}
