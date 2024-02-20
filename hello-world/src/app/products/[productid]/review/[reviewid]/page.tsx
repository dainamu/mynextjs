"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}
export default function ReviewDetail({
  params,
}: {
  params: {
    productid: string;
    reviewid: string;
  };
}) {
  const rundom = getRandomInt(2);

  if (rundom === 1) {
    throw new Error("Error Loading review");
  }

  const { productid, reviewid } = params;
  if (parseInt(reviewid) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {reviewid} for ProductId{productid}
      </h1>
    </>
  );
}
