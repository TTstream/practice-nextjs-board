// mongoDB 쿼리문 참고 사이트 https://lts0606.tistory.com/568
import { connectDB } from "@/util/database";

export default async function SignUp(요청, 응답) {
  if (요청.method == "POST") {
    let { id, password } = 요청.body;
    // console.log(요청.body);
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").find({ id: id }).count();

    if (result != 0) {
      return 응답.status(500).json("현재 존재하는 아이디입니다.");
    }
    db.collection("post").insertOne(요청.body);
    return 응답.status(200).redirect(302, "/list");
  }
}
