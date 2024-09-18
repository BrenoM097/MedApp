import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
  return DoctorRepository.findAllDoctors();
};

const getDoctor = async (id) => {
  return DoctorRepository.findDoctor(id);
};

const saveDoctor = async ({
  name,
  login,
  password,
  medicalSpeciality,
  medicalRegistration,
  email,
  phone,
}) => {
  DoctorRepository.saveDoctor({
    name,
    login,
    password,
    medicalSpeciality,
    medicalRegistration,
    email,
    phone,
  });
};

const updateDoctor = async (
  id,
  {
    name,
    login,
    password,
    medicalSpeciality,
    medicalRegistration,
    email,
    phone,
  }
) => {
  return DoctorRepository.updateDoctor(id, {
    name,
    login,
    password,
    medicalSpeciality,
    medicalRegistration,
    email,
    phone,
  });
};

const deleteDoctor = async (id) => {
  return DoctorRepository.deleteDoctor(id);
};

//login
const getDoctorByLogin = async (login) => {
  return await DoctorRepository.getDoctorByLogin(login);
};

const doctorService = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorByLogin,
};
export default doctorService;
