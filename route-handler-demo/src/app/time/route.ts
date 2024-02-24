export async function GET() {
  const data = new Date();
  return new Response(data.toLocaleString());
}
