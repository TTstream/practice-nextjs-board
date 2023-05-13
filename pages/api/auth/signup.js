// mongoDB 쿼리문 참고 사이트 https://lts0606.tistory.com/568
import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    // 이름, 이메일, 비번란에 빈칸을 보내는 경우 가입을 거절
    if (
      요청.body.name == null ||
      요청.body.email == null ||
      요청.body.password == null
    ) {
      return 응답.status(500).json("빈칸이 존재합니다.");
    }
    //비밀번호 암호화를 해줌
    let hash = await bcrypt.hash(요청.body.password, 10);
    요청.body.password = hash;

    // 요청한 이메일이 DB에 존재하는지 확인
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("user_cred")
      .findOne({ email: 요청.body.email });

    // 이메일이 없다면 회원가입
    if (result == undefined) {
      await db.collection("user_cred").insertOne(요청.body);
      응답.status(200).json("가입성공");
    } else {
      // 이메일이 있다면 반환
      응답.status(500).json("현재 존재하는 이메일입니다.");
    }

    // let { id, password } = 요청.body;
    // console.log(요청.body);
    // let db = (await connectDB).db("forum");
    // let result = await db.collection("post").find({ id: id }).count();
    // if (result != 0) {
    //   return 응답.status(500).json("현재 존재하는 아이디입니다.");
    // }
    // db.collection("post").insertOne(요청.body);
    // return 응답.status(200).redirect(302, "/list");
  }
}
