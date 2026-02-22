import axios from "axios";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";


// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:3002/login", {
//         email,
//         password,
//       });

//       // ✅ SAVE TOKEN
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("username", res.data.user.username);

//       alert("Login successful");

//       // redirect to dashboard
//     //   window.location.href = "http://localhost:3001";
//     // window.location.href = `http://localhost:3001?token=${res.data.token}`;
//     window.location.href = `http://localhost:3001/?token=${res.data.token}&username=${res.data.user.username}`;

//     } catch (err) {
//       alert("Login failed");
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  const response = await fetch("https://tradesphere-6iuy.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.user.username);

    window.location.href =
      "http://localhost:3001/?token=" +
      data.token +
      "&username=" +
      data.user.username;
  } else {
    alert(data.message);
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Zerodha</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;