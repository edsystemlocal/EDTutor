export async function POST(request) {
    const { username, email, password, confirmPassword } = await request.json();
  
    console.log(username, email, password, confirmPassword ,"llllllllllllllllllllllllll");
    
    // Simple validation for existing user
    const existingUsers = [
      { username: "mushrraf", email: "mushrraf@gmail.com" },
      { username: "admin", email: "admin@gmail.com" },
      { username: "abhi", email: "abhi@gmail.com" },
    ];
  
    // Check if username or email is already taken
    const isUsernameTaken = existingUsers.some((user) => user.username === username);
    const isEmailTaken = existingUsers.some((user) => user.email === email);
  
    if (isUsernameTaken) {
      return new Response(
        JSON.stringify({ success: false, message: "Username is already taken." }),
        { status: 400 }
      );
    }
  
    if (isEmailTaken) {
      return new Response(
        JSON.stringify({ success: false, message: "Email is already taken." }),
        { status: 400 }
      );
    }
  
   
  
    // Simulate storing the new user (this would normally involve a database)
    const newUser = { username, email, password };
  
    // For demo purposes, we will return a success response with the user data
    return new Response(
      JSON.stringify({ success: true, message: "Registration successful!", user: newUser }),
      { status: 201 }
    );
  }
  