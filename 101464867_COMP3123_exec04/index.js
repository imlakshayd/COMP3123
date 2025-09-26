// Intializing the server
console.log("Server starting...");
const express = require('express');
const app = express();

// Parsing JSON bodies and serving static files
app.use(express.json());
app.use(express.static('public'));

// Redirect root to /instruction.html
app.get('/', (req, res) => {
  res.redirect('/instruction.html');
});

// GET /hello => "Hello Express JS"
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname= (defaults to Pritesh Patel)
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname (echoes back the params)
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users  (expects an array of { firstname, lastname }) returns the same array
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

