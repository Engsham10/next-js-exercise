interface UserPageProps {
  params: Promise<{
    id: number;
  }>;
}

export default async function UserPage({
  params,
}: UserPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1>Welcome, User {id}</h1>
    </div>
  );
}