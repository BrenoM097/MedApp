import express from "express";
import AppointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientcontroller from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";

let router = express.Router();

router.get("/", function (req, res) {
  console.log("Tudo certo");
  req.status(200).json({ message: "hi!" });
});

router.use("/", AppointmentController);
router.use("/", doctorController);
router.use("/", pacientcontroller);
router.use("/", prescriptionController);

export default router;
