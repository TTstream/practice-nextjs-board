"use client";

import { useRouter } from "next/navigation";

export default function DetailLink({ id }) {
  let router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/detail/${id}`);
      }}
    >
      자세히 보기
    </button>
  );
}
