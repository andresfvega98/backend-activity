
const { Router } = require("express");

const { reservas, reserva, actualizarReserva, eliminarReserva } = require("./../Controllers/Booking.js");

const router = Router();

router.get("/", reservas);

router.post("/", reserva);

router.patch("/:codigo", actualizarReserva);

router.delete("/:codigo", eliminarReserva);

module.exports = router;

