import { Schema, model, models } from "mongoose";

const moviesSchema = new Schema({
  id: Number,
  title: String,
  date: String,
  img: String,
  details: {
    about: String,
    director: String,
    writers: String,
    stars: String,
    rating: Number,
  },
});

const Movies = models.Movies || model("Movies", moviesSchema);
export default Movies;

// Changed to "Movies" from "movies" to fix error with getServerSideProps
