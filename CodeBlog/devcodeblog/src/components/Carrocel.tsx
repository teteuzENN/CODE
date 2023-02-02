import React from "react";
import PostCard from "./PostCard";
import { trpc } from "../utils/trpc";

function Carrocel() {
  const posts = trpc.getLasts.useQuery();
  if (!posts.data) {
    return <h1>Load</h1>;
  }
  let res = posts.data.map((p, index) => <PostCard key={index} post={{ p }} />);
  return (
    <div className="flex my-32 mx-4 justify-center items-stretch gap-6">
      <>{res}</>
    </div>
  );
}

export default Carrocel;
