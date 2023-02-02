import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { trpc } from "../utils/trpc";
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  if (!params.id) {
    return <h1>No Id</h1>;
  }
  const postUnique = trpc.getUnique.useQuery({ id: params.id });
  if (!postUnique.data) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div>
        <ReactMarkdown
          children={
            postUnique.data.title +
            "\n" +
            postUnique.data.description +
            "\n" +
            postUnique.data.content +
            "\n"
          }
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </>
  );
}

export default Post;
