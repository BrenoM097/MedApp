import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Appointment Date is required"],
  },
  doctorId: {
    type: String,
    required: [true, "Doctor ID is required"],
    validate: {
      validator: function (v) {
        const id = new mongoose.Types.ObjectId(v);
        return Doctor.exists({ _id: id });
      },
      message: (props) => `DoctorID ${props.value} not found`,
    },
  },
  pacientId: {
    type: String,
    required: [true, "Pacient ID is required"],
    validate: {
      validator: function (v) {
        const id = new mongoose.Types.ObjectId(v);
        return Pacient.exists({ _id: id });
      },
      message: (props) => `PacientID ${props.value} not found`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const appointment = mongoose.model('Appointment', appointmentSchema);
export default appointment;
