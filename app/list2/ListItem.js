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
            onClick={(e) => {
              // fetch("/api/delete", {
              //   method: "POST",
              //   body: a._id,
              // })
              //   .then((r) => r.json())
              //   .then(() => {
              //     console.log(e.target);
              //     e.target.parentElement.style.opacity = 0;
              //     setTimeout(() => {
              //       e.target.parentElement.style.display = "none";
              //     }, 1000);
              //   });
              // fetch("/api/fetchtest?name=kim&age=20"); 쿼리스트링
              fetch(`/api/delete/${a._id.toString()}`)
                .then((r) => r.json())
                .then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
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
