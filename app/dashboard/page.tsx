import { resolve } from "path";
import Counter from "../components/Counter";
import { notFound } from "next/navigation";

async function getPosts(id: number){
     
     const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );
 
  if (!res.ok && res.status !== 404) {
    throw new Error("Server error while fetching post");
  }

 
  if (res.status === 404) {
    notFound();
  }

  return res.json();
}

export default async function DashboardPage() {
        const post = await getPosts(999);

        return (
            <>
                <h1>Dashboard</h1>
                <p>{post.title}</p>
            </>
        )
}
