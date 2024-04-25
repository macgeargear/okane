export async function GET(req: Request) {
  const response = await fetch("");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return Response.json(await response.json());
}
