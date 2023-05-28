"use client";
// 무조건 error 컴포넌트는 use client사용해야함

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러나요</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        버튼
      </button>
    </div>
  );
}
