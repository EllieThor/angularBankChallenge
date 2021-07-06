const express = require("express");
const router = express.Router();
const serversController = require("../controllers/serversController");

router.get("/getAllServers", serversController.getAllServers);

module.exports = router;