const Vaccine = require("../models/vaccine");

const vaccineCtrl = {};

vaccineCtrl.getVaccines = async (req, res, next) => {
  const vaccines = await Vaccine.find();
  res.json(vaccines);
};

vaccineCtrl.createVaccine = async (req, res, next) => {
  const vaccine = new Vaccine({
    name: req.body.name,
    description: req.body.description,
    tecn: req.body.tecn,
    date: req.body.date,
  });
  await vaccine.save();
  res.json({ status: "Vaccine created" });
};

vaccineCtrl.getVaccine = async (req, res, next) => {
  const { id } = req.params;
  const vaccine = await Vaccine.findById(id);
  res.json(vaccine);
};

vaccineCtrl.editVaccine = async (req, res, next) => {
  const { id } = req.params;
  await Vaccine.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Vaccine Updated" });
};

vaccineCtrl.deleteVaccine = async (req, res, next) => {
  await Vaccine.findByIdAndRemove(req.params.id);
  res.json({ status: "Vaccine Deleted" });
};

module.exports = vaccineCtrl;
