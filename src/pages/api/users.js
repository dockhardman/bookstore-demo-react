// pages/api/users.js

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(users);
      break;
    case "POST":
      const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
      };
      users.push(newUser);
      res.status(201).json(newUser);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
