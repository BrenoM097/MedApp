import { express } from "express";
import appointmentController from "./AppointmentController";
import doctorController from "./DoctorController";
import pacientcontroller from "./PacientController";
import prescriptionController from "./PrescriptionController";

let router = express.Router();

router.get(
  "/", function(req, res) {
    console.log("Tudo certo");
    req.status(200).json({ message: "hi!"});
  }
);

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientcontroller);
router.use("/", prescriptionController);

export default router;