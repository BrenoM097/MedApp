import { PacientRepository } from "../repositories/PacientRepository.js";

const getAllPacients = async () => {
  return PacientRepository.findAllPacients();
};

const getPacient = async (id) => {
  return PacientRepository.findPacient(id);
};

const savePacient = async ({ name, birthDate, email, phone }) => {
  PacientRepository.savePacient({ name, birthDate, email, phone });
};

const updatePacient = async (id, { name, birthDate, email, phone }) => {
  return PacientRepository.updatePacient(id, { name, birthDate, email, phone });
};

const deletePacient = async (id) => {
  return PacientRepository.deletePacient(id);
};

const pacientService = {
  getAllPacients,
  getPacient,
  savePacient,
  updatePacient,
  deletePacient,
};
export default pacientService;
