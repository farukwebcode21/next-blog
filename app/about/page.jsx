import React from "react";

const page = async () => {
  let res = await fetch("https://api.vercel.app/blog");
  let posts = await res.json();
  return (
    <div>
      <h1>Aaout pages call api</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
