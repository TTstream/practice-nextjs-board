export default function Register() {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action="/api/auth/signup" method="POST">
        <input name="name" type="text" placeholder="이름" />
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="text" placeholder="password" />
        <button type="submit">id/pw 가입요청</button>
      </form>
    </div>
  );
}
