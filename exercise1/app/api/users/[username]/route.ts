interface RouteContext {
  params: Promise<{
    username: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  const { username } = await params;

  return Response.json({
    username: username,
  });
}