import { Schema, model, models } from "mongoose";

const screeningsSchema = new Schema({
  id: Number,
  movieid: Number,
  date: String,
  time: String,
  // Add rows as an array type.
  rows: [
    {
      seat1: String,
      seat2: String,
      seat3: String,
      seat4: String,
    },
    {
      seat1: String,
      seat2: String,
      seat3: String,
      seat4: String,
    },
    {
      seat1: String,
      seat2: String,
      seat3: String,
      seat4: String,
    },
  ],
});

const Screenings = models.Screenings || model("Screenings", screeningsSchema);
export default Screenings;

// Changed to "Screenings" from "screenings" to fix error with getServerSideProps
