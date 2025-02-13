export async function POST(request) {
  const { username, password } = await request.json();

  const validUsers = [
    { username: "admin", password: "password123" },
    { username: "abhishek", password: "edtutor@123" },
    { username: "neelesh", password: "edtutor@123" },
    { username: "narendra", password: "edtutor@123" },
    { username: "sumit", password: "edtutor@123" },
  ];

  const user = validUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = "auth-token-12345";

    // Set the cookie for the auth token
    return new Response(
      JSON.stringify({ success: true, message: "Login successful", token }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `authToken=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
        },
      }
    );
  } else {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid username or password." }),
      { status: 401 }
    );
  }
}
