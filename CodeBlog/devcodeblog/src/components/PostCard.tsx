import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

function PostCard(props: { post: any }) {
  console.log(props);
  return (
    <div className="flex-none flex-col bg-neutral-900 w-1/3 h-max rounded overflow-hidden shadow-lg shadow-neutral-900">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">
          <ReactMarkdown
            children={props.post.p.title}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <ReactMarkdown
          children={props.post.p.description}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <div className="px-6 py-6">
        <Link to={`/post/${props.post.p.id}`}>
          <button className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
