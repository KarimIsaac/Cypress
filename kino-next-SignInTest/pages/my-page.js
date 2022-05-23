import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { LoginContext } from "../components/contexts/loginContext";

export default function test() {
  const { userObj } = useContext(LoginContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getBookings({ key: userObj.key, user: userObj.user }, setBookings);
  }, []);

  return (
    <>
      <div>
        {bookings.map((movie) => (
          <p>{movie.title} </p>
        ))}
      </div>
      <Link href="/login">
        <a> login </a>
      </Link>
    </>
  );
}

async function getBookings(data, setBookings) {
  const x = await fetch("http://localhost:3000/api/userBookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  setBookings(await x.json());
}
