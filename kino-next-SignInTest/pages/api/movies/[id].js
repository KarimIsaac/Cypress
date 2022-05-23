import connectDb from "../../../DB/connectDb";
import Movies from "../../../DB/models/Movies";

// Find a single movie with id from /api/movies/[id].
export default async function handler(req, res) {
    try {
        connectDb().then(async () => {
            const { id } = req.query;
            const movie = await Movies.findOne({ id: id });
            if (movie) {
                res.status(200).json(movie);
            } else {
                // If no movie is found, return 404.
                res.status(404).json({ message: "No movie found!" });
            }
        });
    } catch (error) {
        // If error (Database unavailable), return 500.
        res.status(500).json({ message: "Error getting movie!" });
    }
}
