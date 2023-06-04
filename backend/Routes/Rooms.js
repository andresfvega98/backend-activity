const { Router } = require("express");
const { rooms, roomsId } = require("./../Controllers/Rooms");


const router = new Router();

router.get("/", rooms);

router.get("/:codigo", roomsId);


module.exports = router