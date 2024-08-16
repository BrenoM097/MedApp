import { express } from "express";
import DoctorService from "../services/DoctorService.js"

let router = express.Router();

router.get("/doctors", async (req, res) => {
  try {
    const doctor = await DoctorService.getAllDoctors();
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/getDoctor/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorService.getDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/createDoctor", async (req, res) => {
  const {
    name,
    login,
    password,
    medicalSpeciality,
    medicalRegistration,
    email,
    phone,
  } = req.body;
  try {
    const doctor = await DoctorService.saveDoctor({
      name,
      login,
      password,
      medicalSpeciality,
      medicalRegistration,
      email,
      phone,
    });
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/updateDoctor/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    login,
    password,
    medicalSpeciality,
    medicalRegistration,
    email,
    phone,
  } = req.body;
  try {
    const doctor = await DoctorService.updateDoctor(id, {
      name,
      login,
      password,
      medicalSpeciality,
      medicalRegistration,
      email,
      phone,
    });
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/deleteDoctor/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorService.deleteDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
