import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  birthDate: {
    type: Date,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
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
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const pacient = mongoose.model("Pacient", pacientSchema);
export default pacient;
