"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${a._id.toString()}`}>
            <h4>{a.title ? a.title : a.id}</h4>
          </Link>
          <Link href={`/edit/${a._id.toString()}`}>
            <button>게시글 수정</button>
          </Link>
          <span
            onClick={() => {
              fetch("/api/delete", {
                method: "POST",
                body: a._id,
              }).then((window.location.href = "/list"));
            }}
          >
            게시글 삭제
          </span>
          <DetailLink id={a._id.toString()} />
          <p>{a.content ? a.content : a.password}</p>
        </div>
      ))}
    </div>
  );
}
