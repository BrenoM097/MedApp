import { Prescription } from "../models/Prescription.js";

const findAllPrescriptions = async () => {
  return await Prescription.find();
};

const findPrescription = async (id) => {
  try {
    return await Prescription.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const savePrescription = async ({ date, appointmentId, medicine, dosage, instructions }) => {
  try {
    return await Prescription.save({ date, appointmentId, medicine, dosage, instructions });
  } catch (error) {
    throw new Error(error);
  }
};

const updatePrescription = async (id, { date, appointmentId, medicine, dosage, instructions }) => {
  try {
    return await Prescription.findByIdAndUpdate(
      id,
      { date, appointmentId, medicine, dosage, instructions },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deletePrescription = async (id) => {
  try {
    return await Prescription.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const prescriptionRepository = {
  findAllPrescriptions,
  findPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
};
export default prescriptionRepository;
