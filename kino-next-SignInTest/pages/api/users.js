//TODO: remove this api an connect to the MongoDB database at Login with ServerSideProps();
import Cookies from "cookies";
import { v4 as uuid_V4 } from "uuid";
import connectDb from "../../DB/connectDb";
import User from "../../DB/models/users";

export default function loginChecker(req, res) {
  const cookie = new Cookies(req, res);
  const { userName, password } = req.body;
  let infromation;

  connectDb().then(async () => {
    const user = await User.find();
    user.forEach((account) => {
      if (account.name === userName && account.password === password) {
        const sessionValue = uuid_V4();
        infromation = {
          user: account.name,
          key: sessionValue,
          login: true,
        };

        cookie.set("_session", sessionValue);
        res.status(200).json(infromation);
      } else {
        res.status(401).send({
          err: true,
          message: "401: account do not exist!",
        });
      }
    });
  });
}
