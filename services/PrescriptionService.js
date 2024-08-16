import { PrescriptionRepository } from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async () => {
  return PrescriptionRepository.findAllPrescriptions();
};

const getPrescription = async (id) => {
  return PrescriptionRepository.findPrescription(id);
};

const savePrescription = async ({
  date,
  appointmentId,
  medicine,
  dosage,
  instructions,
}) => {
  PrescriptionRepository.savePrescription({
    date,
    appointmentId,
    medicine,
    dosage,
    instructions,
  });
};

const updatePrescription = async (
  id,
  { date, appointmentId, medicine, dosage, instructions }
) => {
  return PrescriptionRepository.updatePrescription(id, {
    date,
    appointmentId,
    medicine,
    dosage,
    instructions,
  });
};

const deletePrescription = async (id) => {
  return PrescriptionRepository.deletePrescription(id);
};

const prescriptionService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
};
export default prescriptionService;
