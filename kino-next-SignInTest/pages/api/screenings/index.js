import connectDb from "../../../DB/connectDb";
import Screenings from "../../../DB/models/screenings";

// Get all screenings from /api/screenings.
export default function handler(req, res) {
    try {
        connectDb().then(async () => {
            const screenings = await Screenings.find();
            res.status(200).json(screenings);
        });
    } catch (error) {
        // If error (Database unavailable), return 500.
        res.status(500).json({ message: "Error getting screenings!" });
    }
};