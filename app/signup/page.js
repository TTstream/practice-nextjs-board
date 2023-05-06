export default function SignUp() {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action="/api/signup" method="POST">
        <input name="id" placeholder="id" />
        <input name="password" placeholder="password" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
