import Cookies from "cookies";
// import { mockLogins } from "./users.js";

//Note: just a test to bring up a mock booking list
export default function handler(req, res) {
  const cookie = new Cookies(req, res);
  const key = cookie.get("_session");
  if (key === req.body.key) {
    mockLogins.forEach(user => {
      if(user.user === req.body.user){
        res.status(200).json(user.bookings);
      }
    })
  } 
}
