import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "./utils/trpc";
import Home from "./pages/Home";
import "./index.css";
import Posts from "./pages/Posts";
import OnePost from "./pages/OnePost";
import PostCardFull from "./components/PostCardFull";
import Admin from "./pages/Admin";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/post/:id" element={<OnePost />}></Route>
        </Routes>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
