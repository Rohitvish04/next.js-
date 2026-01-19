interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Page</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
}
