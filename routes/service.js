const express = require("express");
const serviceRouter = express.Router();
const Service = require("../models/Service");
const jwt = require("jsonwebtoken");
const addServiceRules = require("../middleware/validator");
const isAuth = require("../middleware/passport");

//
serviceRouter.post("/addService", async (req, res) => {
  try {
    const newService = new Service(req.body);

    // save the service
    const result = await newService.save();
    res.status(200).send({
      service: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

serviceRouter.get("/services", async (req, res) => {
  try {
    const result = await Service.find();
    res.send({ services: result });
  } catch (error) {
    res.send({ msg: error });
  }
});

//update service
serviceRouter.put("/updateService/:id", async (req, res) => {
  try {
    const result = await Service.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "Service updated successfully" });
  } catch (error) {
    res.send({ msg: error });
  }
});

//delete service
serviceRouter.delete("/deleteService/:id", async (req, res) => {
  try {
    const result = await Service.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "Service deleted successfully" });
  } catch (error) {
    res.send({ msg: error });
  }
});

module.exports = serviceRouter;
