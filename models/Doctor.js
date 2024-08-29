import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  login: {
    type: String,
    required: [true, "Login is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  medicalSpeciality: {
    type: String,
    required: [true, "Speciality is required"],
  },
  medicalRegistration: {
    type: String,
    required: [true, "CRM is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    validate: {
      validator: function (v) {
        return /\d{2} 9\d{4}-\d{4}/.test(v);
      },
      message: (props) =>
        `${props.value} This is not a valid phone number. Please use the following format (DDD) 0 0000-0000`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const doctor = mongoose.model("Doctor", doctorSchema);
export default doctor;
