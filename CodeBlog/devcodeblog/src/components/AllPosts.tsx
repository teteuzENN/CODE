import React from "react";
import { trpc } from "../utils/trpc";
import PostCardFull from "./PostCardFull";

function AllPosts() {
  const postAll = trpc.getAll.useQuery();
  if (!postAll.data) {
    return <h1>loading</h1>;
  }
  let res = postAll.data.map((p, index) => (
    <div className="mb-12 mx-4">
      <PostCardFull key={index} post={{ p }} />
    </div>
  ));
  return <div className="flex-row">{res}</div>;
}

export default AllPosts;
