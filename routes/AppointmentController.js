import { express } from "express";
import AppoitmentService from "../services/AppointmentService";

let router = express.Router();

router.get("/appoitments", async (req, res) => {
  try {
    const appointments = await AppoitmentService.getAllAppointments();
    res.send(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/getAppoitment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await AppoitmentService.getAppointment(id);
    res.send(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/createAppoitment", async (req, res) => {
  const { date, doctorId, pacientId } = req.body;
  try {
    const appointment = await AppoitmentService.saveAppointment({
      date,
      doctorId,
      pacientId,
    });
    res.send(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/updateAppoitment/:id", async (req, res) => {
  const {id} = req.params;
  const { date, doctorId, pacientId } = req.body;
  try {
    const appointment = await AppoitmentService.updateAppointment( id, {
      date,
      doctorId,
      pacientId,
    });
    res.send(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/deleteAppoitment/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const appointment = await AppoitmentService.deleteAppointment(id);
    res.send(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
