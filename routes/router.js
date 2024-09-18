import express from "express";
import AppointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientcontroller from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";
import doctorService from "../services/DoctorService.js";
import bcrypt from "bcrypt";
import verifyToken from "../middleware/authMiddleware.js";
import jwt from 'jsonwebtoken';

let router = express.Router();

router.get("/", function (req, res) {
  console.log("Tudo certo");
  req.status(200).json({ message: "hi!" });
});

// mapeamento do login
router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    const doctor = await doctorService.getDoctorByLogin(login);
    if (!doctor) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(password, doctor.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const token = jwt.sign({ doctorId: doctor.id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

router.use("/", verifyToken, AppointmentController);
router.use("/", verifyToken, doctorController);
router.use("/", verifyToken, pacientcontroller);
router.use("/", verifyToken, prescriptionController);

export default router;
