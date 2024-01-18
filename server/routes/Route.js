const express = require("express");
const {
  addUser,
  getUser,
  loadUser,
  editUser,
  deleteUser,
} = require("../controllers/user-controller.js");

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUser);
router.get("/:id", loadUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
