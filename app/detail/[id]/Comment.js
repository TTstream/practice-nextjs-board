"use client";

import { useEffect, useState } from "react";

export default function Comment({ _id }) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/comment/list?id=${_id}`)
      .then((r) => r.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: _id }),
          })
            .then((response) => response.json())
            .then((result) => setData(result));
        }}
      >
        댓글전송
      </button>
      <div>
        {data.length > 0
          ? data.map((data, index) => <p key={index}>{data.content}</p>)
          : data.length == 0
          ? "댓글 없음"
          : "댓글로딩중"}
      </div>
    </div>
  );
}
