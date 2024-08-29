import Appointment from "../models/Appointment.js";

const findAllAppointmets = async () => {
  return await Appointment.find();
};

const findAppointment = async (id) => {
  try {
    return await Appointment.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const saveAppointment = async ({ date, doctorId, pacientId }) => {
  try {
    const prescription = new Appointment({ date, doctorId, pacientId });
    return await prescription.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updateAppointment = async(id, { date, doctorId, pacientId }) => {
  try {
    return await Appointment.findByIdAndUpdate(id, { date, doctorId, pacientId}, {new: true});
  } catch (error) {
    throw new Error(error);
  }
}

const deleteAppointment = async (id) => {
  try {
    return await Appointment.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
}

const appoitmentRepository = {
  findAllAppointmets,
  findAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment
};
export default appoitmentRepository;
