export default function Write() {
  return (
    <div className="p-20">
      <h4>글 작성</h4>
      <form action="/api/test" method="POST">
        <input name="title" placeholder="title" />
        <input name="content" placeholder="content" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
