import Pacient from "../models/Pacient.js";

const findAllPacients = async () => {
  return await Pacient.find();
};

const findPacient = async (id) => {
  try {
    return await Pacient.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const savePacient = async ({ name, birthDate, email, phone }) => {
  try {
    const pacient = new Pacient({ name, birthDate, email, phone });
    return await pacient.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updatePacient = async (id, { name, birthDate, email, phone }) => {
  try {
    return await Pacient.findByIdAndUpdate(
      id,
      { name, birthDate, email, phone },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deletePacient = async (id) => {
  try {
    return await Pacient.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const pacientRepository = {
  findAllPacients,
  findPacient,
  savePacient,
  updatePacient,
  deletePacient,
};
export default pacientRepository;
