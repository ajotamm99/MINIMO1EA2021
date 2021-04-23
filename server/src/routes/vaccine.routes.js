const express = require("express");
const router = express.Router();

const vaccine = require("../controllers/vaccine.controller");

router.get("/", vaccine.getVaccines);

router.post("/", vaccine.createVaccine);

router.get("/:id", vaccine.getVaccine);

router.put("/:id", vaccine.editVaccine);

router.delete("/:id", vaccine.deleteVaccine);

module.exports = router;
