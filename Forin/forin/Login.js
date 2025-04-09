document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form refresh
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
  
    try {
      // Basic input validation
      if (!username || !password) {
        throw new Error("Both fields are required.");
      }
  
      // Fake hardcoded credentials (for demo)
      const validUsername = "admin";
      const validPassword = "1234";
  
      if (username !== validUsername || password !== validPassword) {
        throw new Error("Invalid username or password.");
      }
  
      // Success
      message.textContent = "Login successful!";
      message.style.color = "green";
    } catch (error) {
      message.textContent = error.message;
      message.style.color = "red";
    }
  });
  