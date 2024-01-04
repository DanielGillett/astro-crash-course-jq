async function GET() {
  return new Response(JSON.stringify({ msg: "Hello World" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
const POST = async ({ params, request }) => {
  const body = await request.json();
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { GET, POST };
