import connectDb from "../../../DB/connectDb";
import Movies from "../../../DB/models/Movies";

// Get all movies from /api/movies.
export default function handler(req, res) {
    try {
        connectDb().then(async () => {
            const movies = await Movies.find();
            res.status(200).json(movies);
        });
    } catch (error) {
        // If error (Database unavailable), return 500.
        res.status(500).json({ message: "Error getting movies!" });
    }
};