import AppoitmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointments = async () => {
  return AppoitmentRepository.findAllAppointmets();
};

const getAppointment = async (id) => {
  return AppoitmentRepository.findAppointment(id);
};

const saveAppointment = async ({ date, doctorId, pacientId }) => {
  AppoitmentRepository.saveAppointment({ date, doctorId, pacientId });
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  return AppoitmentRepository.updateAppointment(id, {
    date,
    doctorId,
    pacientId,
  });
};

const deleteAppointment = async(id) => {
  return AppoitmentRepository.deleteAppointment(id);
}

const appoitmentService = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment
};
export default appoitmentService;
