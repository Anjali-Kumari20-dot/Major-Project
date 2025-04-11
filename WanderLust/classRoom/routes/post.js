const express = require("express");
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
    res.send("GET for post");
});

// SHOW
router.get("/:id", (req, res) => {
    res.send("GET for post id");
});

// POST
router.post("", (req, res) => {
    res.send("POST for users");
});

// DELETE
router.delete("/:id", (req, res) => {
    res.send("POST for users");
});

module.exports = router;
