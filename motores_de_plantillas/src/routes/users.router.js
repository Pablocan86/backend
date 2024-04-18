import express from "express";

const router = express.Router(); //Llamamos a Router

const users = [];

router.get("/users", (req, res) => {
  res.json(users);
});

router.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "Usuario agregada" });
});

module.exports = router;
