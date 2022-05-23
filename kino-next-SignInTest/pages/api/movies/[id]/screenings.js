import connectDb from "../../../../DB/connectDb";
import Screenings from "../../../../DB/models/screenings";

// Find all screenings for the movie with movieid: id. /api/movies/[id]/screenings.
export default async function handler(req, res) {
    try {
        connectDb().then(async () => {
            const { id } = req.query;
            const screenings = await Screenings.find({ movieid: id });
            if (screenings) {
                res.status(200).json(screenings);
            } else {
                // If no screenings are found, return 404.
                res.status(404).json({ message: "No screenings found!" });
            }
        });
    } catch (error) {
        // If error (Database unavailable), return 500.
        res.status(500).json({ message: "Error getting screenings!" });
    }
}